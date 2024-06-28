import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import Spinner from '../components/Spinner';

type AppState = {
    token: string;
    jitsi_token: string;
    employeeId?: number;
    customerId?: number;
    eventId?: number;
    setEmployeeId: (id?: number) => void,
    setCustomerId: (id?: number) => void,
    setEventId: (id: number) => void,
    setTokens: (tokens: {
        token: string,
        jitsi_token: string,
    }) => void;
    resetAll: () => void
}
const AppContext = React.createContext<AppState>({
    token: '',
    jitsi_token: '',
    setEmployeeId: (id?: number) => { },
    setCustomerId: (id?: number) => { },
    setEventId: (id: number) => { },
    setTokens: (tokens: {
        token: string,
        jitsi_token: string,
    }) => { },
    resetAll: () => { },
});

function AppProvider(props: PropsWithChildren) {
    const [loading, setLoading] = useState(true);
    const [employeeId, _setEmployeeId] = useState<number>();
    const [customerId, _setCustomerId] = useState<number>();
    const [eventId, _setEventId] = useState<number>();
    const [tokens, _setTokens] = useState<{ token: string, jitsi_token: string }>({
        token: '',
        jitsi_token: ''
    })

    useEffect(() => {
        const employeeId = localStorage.getItem('employee_id');
        _setEmployeeId(employeeId ? parseInt(employeeId) : undefined);
        const eventId = localStorage.getItem('event_id');
        _setEventId(eventId ? parseInt(eventId) : undefined);
        const CustomerId = localStorage.getItem('customer_id');
        _setCustomerId(CustomerId ? parseInt(CustomerId) : undefined);
        const tokens = localStorage.getItem('tokens');
        _setTokens(tokens ? JSON.parse(tokens) : {
            token: '',
            jitsi_token: ''
        });
        setLoading(false)
    }, [])

    const setEmployeeId = (id?: number) => {
        localStorage.setItem('employee_id', id ? `${id}` : '')
        _setEmployeeId(id);
    };

    const setCustomerId = (id?: number) => {
        localStorage.setItem('customer_id', id ? `${id}` : '')
        _setCustomerId(id);
    };

    const setTokens = (tokens: {
        token: string,
        jitsi_token: string,
    }) => {
        localStorage.setItem('tokens', JSON.stringify(tokens))
        _setTokens(tokens);
    };

    const setEventId = (id: number) => {
        localStorage.setItem('event_id', id.toString())
        _setEventId(id);
    };

    const resetAll = () => {
        localStorage.clear();
        _setCustomerId(undefined);
        _setEmployeeId(undefined);
        _setEventId(undefined);
        _setTokens({ token: '', jitsi_token: '' })

    }

    return (
        <AppContext.Provider value={{ employeeId, eventId, customerId, ...tokens, setEmployeeId, setCustomerId, setTokens, setEventId, resetAll }}>
            {loading ? <Spinner /> : props.children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);

export default AppProvider