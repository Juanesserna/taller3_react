import React, { useState } from 'react';
import { Box, Typography, TextField, Button, styled, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PageWrapper = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
});

const FormCard = styled(Box)({
    background: '#3d0000',
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box',
});

const FormTitle = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '26px',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
});

const FormSubtitle = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: '-12px',
});

const WineTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '8px',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
        '&.Mui-focused fieldset': { borderColor: '#ffffff' },
        '&.Mui-error fieldset': { borderColor: '#ff6b6b' },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255,255,255,0.45)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' },
    '& .MuiInputLabel-root.Mui-error': { color: '#ff6b6b' },
    '& .MuiFormHelperText-root': {
        color: '#ff6b6b',
        fontFamily: 'Arial, sans-serif',
        fontSize: '11px',
    },
    '& .MuiSvgIcon-root': { color: 'rgba(255,255,255,0.5)' },
});

const SubmitBtn = styled(Button)({
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'background 0.15s',
    '&:hover': { background: '#222222' },
    '&:disabled': { background: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.3)' },
});

const Divider = styled(Box)({
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
});

const validateEmail = (email) => {
    if (!email) return 'El correo es obligatorio';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Ingresa un correo válido';
    return '';
};

const validatePassword = (password) => {
    if (!password) return 'La contraseña es obligatoria';
    if (password.length < 6) return 'Mínimo 6 caracteres';
    return '';
};

export const MyAccount = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [touched, setTouched] = useState({ email: false, password: false });
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: name === 'email' ? validateEmail(value) : validatePassword(value),
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({
            ...prev,
            [name]: name === 'email' ? validateEmail(value) : validatePassword(value),
        }));
    };

    const handleSubmit = () => {
        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);
        setErrors({ email: emailError, password: passwordError });
        setTouched({ email: true, password: true });
        if (!emailError && !passwordError) setSubmitted(true);
    };

    if (submitted) {
        return (
            <PageWrapper>
                <FormCard>
                    <FormTitle>¡Bienvenido!</FormTitle>
                    <FormSubtitle>Has iniciado sesión como</FormSubtitle>
                    <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Arial', fontSize: '15px', fontWeight: 600 }}>
                        {form.email}
                    </Typography>
                    <SubmitBtn onClick={() => { setSubmitted(false); setForm({ email: '', password: '' }); setTouched({ email: false, password: false }); }}>
                        Cerrar sesión
                    </SubmitBtn>
                </FormCard>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <FormCard>
                <FormTitle>Mi Cuenta</FormTitle>
                <FormSubtitle>Inicia sesión para continuar</FormSubtitle>
                <Divider />
                <WineTextField
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                    size="small"
                />
                <WineTextField
                    label="Contraseña"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                    {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <SubmitBtn
                    fullWidth
                    onClick={handleSubmit}
                    disabled={Boolean(errors.email && touched.email) || Boolean(errors.password && touched.password)}
                >
                    Iniciar sesión
                </SubmitBtn>
                <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', fontFamily: 'Arial' }}>
                    ¿No tienes cuenta? <span style={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>Regístrate</span>
                </Typography>
            </FormCard>
        </PageWrapper>
    );
};