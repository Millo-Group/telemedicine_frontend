import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Box from "../../components/Box";
import { useApi } from "../../hooks/useApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApp } from "../../providers/AppProvider";

type AuthPayload = {
  employee_id?: number;
  customer_id?: number;
  event_id: number;
};

function Authorization() {
  const api = useApi();
  const [searchParams] = useSearchParams();
  const { setCustomerId, setEmployeeId, setTokens, setEventId, employeeId, customerId, eventId, token } = useApp();

  const navigate = useNavigate();
  const event_id = searchParams.get("event_id") || eventId?.toString();
  const employee_id = searchParams.get("employee_id") || employeeId?.toString();
  const customer_id = searchParams.get("customer_id") || customerId?.toString();

  const authUser = async (params: AuthPayload) => {
    try {
      setCustomerId(params.customer_id);
      setEmployeeId(params.employee_id);
      setEventId(params.event_id)
      Object.keys(params).forEach((item) => {
        if (typeof params[item as keyof AuthPayload] === 'undefined') {
          delete params[item as keyof AuthPayload];
        }
      })
      const { data } = await api.post<{
        token: string;
        jitsi_jwt: string;
        room_name: string;
      }>("/authenticate", params);
      setTokens({
        token: data.token,
        jitsi_token: data.jitsi_jwt,
      })

      localStorage.setItem("token", data.token);
      let redirectTo = params?.employee_id ? "dashboard" : "patient-videocall";

      navigate(`/${redirectTo}/${data.room_name}`, {
        state: {
          jwt: data.jitsi_jwt,
          event_id,
          employee_id,
          customer_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (event_id != null && (employee_id != null || customer_id != null)) {
      authUser({
        event_id: parseInt(event_id),
        employee_id: employee_id ? parseInt(employee_id) : undefined,
        customer_id: customer_id ? parseInt(customer_id) : undefined,
      });
    } else {
      navigate("/");
    }
  }, [event_id, employee_id, customer_id]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="50vh"
      flexDirection="column"
    >
      <h5>Please wait a moment we'll navigate to meeting shortly</h5>
      <Spinner />
    </Box>
  );
}

export default Authorization;
