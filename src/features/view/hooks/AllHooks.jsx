import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer, createContext, useContext } from 'react';
import { Box, Typography, Button, Card, CardContent, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const HooksGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto',
    gap: '16px',
    padding: '24px',
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        padding: '12px',
        gap: '12px',
    },
}));

const HookCard = styled(Card)({
    background: '#2c0101',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    width: '100%',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxSizing: 'border-box',
    overflow: 'hidden',
});

const HookTitle = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    wordBreak: 'break-word',
});

const SubText = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    wordBreak: 'break-word',
});

const CounterDisplay = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '36px',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 1,
});

const InnerBlock = styled(Box)({
    background: 'rgba(0,0,0,0.25)',
    borderRadius: '8px',
    padding: '10px 14px',
});

const BlackBtn = styled('button')({
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'background 0.15s',
    '&:hover': { background: '#222' },
    '&:active': { transform: 'scale(0.97)' },
});

const ValueLabel = styled(Typography)({
    fontSize: '11px',
    color: 'rgba(255,255,255,0.45)',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '2px',
});

const ValueText = styled(Typography)({
    fontSize: '15px',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 600,
    minHeight: '22px',
});

const WineTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        background: 'rgba(0,0,0,0.25)',
        borderRadius: '8px',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
        '&.Mui-focused fieldset': { borderColor: '#ffffff' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.45)', fontFamily: 'Arial, sans-serif', fontSize: '13px' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' },
});

const CountBtn = styled(Button)(({ variant: v }) => ({
    minWidth: '38px',
    height: '38px',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '16px',
    padding: 0,
    background: '#000000',
    color: '#fff',
    border: 'none',
    '&:hover': { background: '#222' },
    transition: 'all 0.15s ease',
}));

export const UseState = () => {
    const [contador, setContador] = useState(() => {
        const valorGuardado = localStorage.getItem('contador');
        return valorGuardado !== null ? Number(valorGuardado) : 0;
    });
    const actualizar = (valor) => {
        setContador(valor);
        localStorage.setItem('contador', valor);
    };
    return (
        <HookCard>
            <HookTitle>useState</HookTitle>
            <CounterDisplay>{contador}</CounterDisplay>
            <SubText>clics registrados</SubText>
            <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <CountBtn variant="increment" onClick={() => actualizar(contador + 1)}>+</CountBtn>
                <CountBtn variant="decrement" onClick={() => actualizar(contador - 1)}>−</CountBtn>
                <CountBtn variant="reset" onClick={() => actualizar(0)}>↺</CountBtn>
            </Box>
        </HookCard>
    );
};

const PulseDot = styled(Box)({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
    animation: 'pulse 1.5s infinite',
    '@keyframes pulse': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.3 },
    },
});

export const UseEffect = () => {
    const [count, setCount] = useState(() => {
        const valorGuardado = localStorage.getItem('contador');
        return valorGuardado !== null ? Number(valorGuardado) : 0;
    });

    useEffect(() => {
        const timer = setTimeout(() => { setCount((c) => c + 1); }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => { localStorage.setItem('contador', count); });

    return (
        <HookCard>
            <HookTitle>useEffect</HookTitle>
            <CounterDisplay>{count}</CounterDisplay>
            <SubText>renders totales</SubText>
        </HookCard>
    );
};

const StatusDot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'online',
})(({ online }) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    flexShrink: 0,
    background: online === 'true' ? '#22c55e' : '#ef4444',
    boxShadow: online === 'true' ? '0 0 8px rgba(34,197,94,0.7)' : '0 0 8px rgba(239,68,68,0.7)',
}));

export const UseOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <HookCard>
            <HookTitle>useEffect — custom hook</HookTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.25)', borderRadius: '10px', padding: '14px 16px' }}>
                <StatusDot online={String(isOnline)} />
                <Box>
                    <Typography sx={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: 700, color: '#fff' }}>
                        {isOnline ? 'Conectado' : 'Sin conexión'}
                    </Typography>
                </Box>
            </Box>
        </HookCard>
    );
};

export const UseRef = () => {
    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');

    useEffect(() => { previousInputValue.current = inputValue; }, [inputValue]);

    return (
        <HookCard>
            <HookTitle>useRef</HookTitle>
            <WineTextField
                label="Escribe un país"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="small"
                fullWidth
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <InnerBlock>
                    <ValueLabel>actual</ValueLabel>
                    <ValueText>{inputValue || '—'}</ValueText>
                </InnerBlock>
                <InnerBlock>
                    <ValueLabel>anterior (ref)</ValueLabel>
                    <ValueText sx={{ color: 'rgba(255,255,255,0.45)' }}>{previousInputValue.current || '—'}</ValueText>
                </InnerBlock>
            </Box>
        </HookCard>
    );
};

const CounterRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0,0,0,0.25)',
    borderRadius: '8px',
    padding: '10px 14px',
});

const CounterValue = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1,
    minWidth: '30px',
    textAlign: 'right',
});

const CounterName = styled(Typography)({
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
});

export const UseCallback = () => {
    const MemoButton = React.memo(({ onClick, text }) => {
        console.log(`${text} button rendered`);
        return <BlackBtn onClick={onClick}>{text}</BlackBtn>;
    });

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = useCallback(() => { setCount1(count1 + 1); }, [count1]);
    const handleClick2 = useCallback(() => { setCount2(count2 + 1); }, [count2]);

    return (
        <HookCard>
            <HookTitle>useCallback</HookTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <CounterRow>
                    <Box>
                        <CounterName>Contador A</CounterName>
                        <CounterValue>{count1}</CounterValue>
                    </Box>
                    <MemoButton onClick={handleClick1} text="+ Sumar" />
                </CounterRow>
                <CounterRow>
                    <Box>
                        <CounterName>Contador B</CounterName>
                        <CounterValue>{count2}</CounterValue>
                    </Box>
                    <MemoButton onClick={handleClick2} text="+ Sumar" />
                </CounterRow>
            </Box>
        </HookCard>
    );
};

const UserContext = createContext();

const ComponentBlock = styled(Box)(({ depth }) => ({
    background: depth === '1' ? 'rgba(0,0,0,0.2)' : depth === '2' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.4)',
    borderRadius: '8px',
    padding: '10px 14px',
    position: 'relative',
    '&::before': {
        content: `"C${depth}"`,
        position: 'absolute',
        top: '8px',
        right: '10px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '10px',
        color: 'rgba(255,255,255,0.2)',
        fontWeight: 700,
    },
}));

const ComponentLabel = styled(Typography)({
    fontSize: '10px',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '4px',
});

const UserChip = styled(Box)({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '20px',
    padding: '4px 12px',
    marginTop: '4px',
});

export const UseContext = () => {
    const ContextCard = styled(Card)({
        border: 'none',
        borderRadius: '12px',
        padding: '0',
        width: '100%',
        boxShadow: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        background: '#2c0101',
    });

    const Component1 = () => {
        const [user] = useState('Linus Torvalds');
        return (
            <UserContext.Provider value={user}>
                <ComponentBlock depth="1">
                    <ComponentLabel>Provider — provee el valor</ComponentLabel>
                    <UserChip>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                        <Typography sx={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#fff', fontWeight: 700 }}>
                            {user}
                        </Typography>
                    </UserChip>
                    <Component2 />
                </ComponentBlock>
            </UserContext.Provider>
        );
    };

    const Component2 = () => (
        <Box sx={{ mt: 1 }}>
            <ComponentBlock depth="2">
                <ComponentLabel>Intermediario — no consume el contexto</ComponentLabel>
                <Typography sx={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Arial, sans-serif' }}>props: ninguna</Typography>
                <Component3 />
            </ComponentBlock>
        </Box>
    );

    const Component3 = () => {
        const user = useContext(UserContext);
        return (
            <Box sx={{ mt: 1 }}>
                <ComponentBlock depth="3">
                    <ComponentLabel>Consumer — lee el contexto directamente</ComponentLabel>
                    <Typography sx={{ fontSize: '13px', color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        Bienvenido, {user}
                    </Typography>
                </ComponentBlock>
            </Box>
        );
    };

    return (
        <ContextCard>
            <CardContent sx={{ p: '16px !important' }}>
                <HookTitle sx={{ mb: 1 }}>useContext</HookTitle>
                <Component1 />
            </CardContent>
        </ContextCard>
    );
};

const PlayerRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0,0,0,0.25)',
    borderRadius: '8px',
    padding: '10px 14px',
    gap: '12px',
});

const PlayerName = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
    flex: 1,
    textTransform: 'uppercase',
    letterSpacing: '1px',
});

const ScoreDisplay = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1,
    minWidth: '30px',
    textAlign: 'center',
});

const PointBtn = styled('button')({
    background: '#000000',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    width: '34px',
    height: '34px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 800,
    cursor: 'pointer',
    transition: 'background 0.15s, transform 0.1s',
    flexShrink: 0,
    '&:hover': { background: '#222', transform: 'scale(1.08)' },
    '&:active': { transform: 'scale(0.95)' },
});

const initialScore = [
    { id: 1, score: 0, name: 'Juan' },
    { id: 2, score: 0, name: 'Esteban' },
];

const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state.map((player) =>
                player.id === action.id ? { ...player, score: player.score + 1 } : player
            );
        default:
            return state;
    }
};

export const UseReducer = () => {
    const [score, dispatch] = useReducer(scoreReducer, initialScore);

    return (
        <HookCard>
            <HookTitle>useReducer</HookTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {score.map((player) => (
                    <PlayerRow key={player.id}>
                        <PlayerName>{player.name}</PlayerName>
                        <ScoreDisplay>{player.score}</ScoreDisplay>
                        <PointBtn onClick={() => dispatch({ type: 'INCREASE', id: player.id })}>+</PointBtn>
                    </PlayerRow>
                ))}
            </Box>
        </HookCard>
    );
};

const MemoCard = styled(Card)({
    background: '#2c0101',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    width: '100%',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxSizing: 'border-box',
    overflow: 'hidden',
});

const SectionBlock = styled(Box)({
    background: 'rgba(0,0,0,0.25)',
    borderRadius: '8px',
    padding: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
});

const SectionTitle = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '11px',
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
});

const ActionBtn = styled('button')(({ variant: v }) => ({
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'background 0.15s',
    alignSelf: 'flex-start',
    opacity: v === 'secondary' ? 0.75 : 1,
    '&:hover': { background: '#222' },
}));

const TodoItem = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.65)',
    padding: '4px 0',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    '&:last-child': { borderBottom: 'none' },
});

const ResultDisplay = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1,
});

const Divider = styled(Box)({
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
});

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) { num += 1; }
    return num;
};

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <MemoCard>
            <HookTitle>useMemo</HookTitle>
            <SectionBlock>
                <SectionTitle>Lista de tareas</SectionTitle>
                {todos.length === 0 ? (
                    <SubText sx={{ textAlign: 'left', fontSize: '12px' }}>sin tareas aún</SubText>
                ) : (
                    todos.map((todo, i) => <TodoItem key={i}>{todo}</TodoItem>)
                )}
                <ActionBtn variant="secondary" onClick={() => setTodos((t) => [...t, `Tarea ${t.length + 1}`])}>
                    + Agregar tarea
                </ActionBtn>
            </SectionBlock>
            <Divider />
            <SectionBlock>
                <SectionTitle>Cálculo costoso (memoizado)</SectionTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ResultDisplay>{calculation}</ResultDisplay>
                    <ActionBtn variant="primary" onClick={() => setCount((c) => c + 1)}>+1</ActionBtn>
                </Box>
                <SubText sx={{ textAlign: 'left', fontSize: '11px' }}>
                    Solo recalcula cuando el contador cambia, no cuando se agregan tareas.
                </SubText>
            </SectionBlock>
        </MemoCard>
    );
};

export const AllHooks = () => (
    <HooksGrid>
        <UseState />
        <UseEffect />
        <UseOnlineStatus />
        <UseRef />
        <UseCallback />
        <UseContext />
        <UseReducer />
        <UseMemo />
    </HooksGrid>
);