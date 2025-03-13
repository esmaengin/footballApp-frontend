import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Stack,
  Tabs,
  Tab,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+90|0)?\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleAgreeTermsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAgreeTerms(event.target.checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Doğrulama işlemi
    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value)
          ? ''
          : 'Geçerli bir e-posta adresi giriniz',
      }));
    }

    if (name === 'phone') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: phoneRegex.test(value)
          ? ''
          : 'Geçerli bir telefon numarası giriniz',
      }));
    }
  };

  const isFormValid =
    Object.values(formValues).every((value) => value !== '') &&
    agreeTerms &&
    !errors.email &&
    !errors.phone;

  const isLoginFormValid =
    formValues.email !== '' && formValues.password !== '' && !errors.email;

  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Halı Saha Rezervasyon
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Ana İçerik */}
      <Container component="main" maxWidth="xs" sx={{ minHeight: '80vh' }}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            mt: 8,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#4caf50' },
              '& .MuiTab-root': { color: 'gray' },
              '& .MuiTab-root.Mui-selected': {
                color: '#4caf50',
                fontWeight: 'bold',
              },
            }}
          >
            <Tab label="Giriş Yap" />
            <Tab label="Üye Ol" />
          </Tabs>

          <Typography variant="h5" fontWeight="bold" gutterBottom mt={2}>
            {activeTab === 0 ? 'Giriş Yap' : 'Üye Ol'}
          </Typography>

          <Stack spacing={2} width="100%" mt={3}>
            {activeTab === 0 ? (
              <>
                <TextField
                  label="E-posta adresi"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Şifre"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <TextField
                  label="Ad"
                  name="firstName"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Soyad"
                  name="lastName"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                <TextField
                  label="E-posta adresi"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Şifre"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Telefon Numarası"
                  name="phone"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formValues.phone}
                  onChange={(e) => {
                    let inputValue = e.target.value.replace(/\D/g, '');

                    if (!inputValue.startsWith('90')) {
                      inputValue = '90' + inputValue;
                    }

                    inputValue = inputValue.substring(0, 12);

                    setFormValues((prevValues) => ({
                      ...prevValues,
                      phone: '+' + inputValue,
                    }));

                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      phone:
                        inputValue.length === 12
                          ? ''
                          : 'Geçerli bir telefon numarası giriniz',
                    }));
                  }}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== 'Backspace' &&
                      e.key !== 'Delete'
                    ) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="+90"
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreeTerms}
                      onChange={handleAgreeTermsChange}
                      name="agreeTerms"
                      color="primary"
                    />
                  }
                  label="Şartları kabul ediyorum"
                />
              </>
            )}

            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              disabled={activeTab === 1 ? !isFormValid : !isLoginFormValid}
            >
              {activeTab === 0 ? 'Giriş Yap' : 'Üye Ol'}
            </Button>
          </Stack>
        </Paper>
      </Container>

      {/* Footer */}
      <AppBar
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          backgroundColor: '#4caf50',
          padding: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Halı Saha Rezervasyon | Tüm
            Hakları Saklıdır
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
