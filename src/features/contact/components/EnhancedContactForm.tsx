
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  Avatar,
  Paper,
  IconButton,
  Fade,
  Alert,
  LinearProgress,
} from '@mui/material';
import {
  Send,
  Phone,
  Email,
  LocationOn,
  Business,
  Person,
  Message,
  CheckCircle,
} from '@mui/icons-material';

const services = [
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
  'Data Analytics',
  'Cybersecurity',
  'DevOps',
  'Consulting',
  'Other'
];

const budgetRanges = [
  'Under $10K',
  '$10K - $50K',
  '$50K - $100K',
  '$100K+',
  'To be discussed'
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
  timeline: string;
}

export const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [],
    budget: '',
    message: '',
    timeline: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  
  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };
  
  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSubmitted(true);
  };
  
  const progress = ((step + 1) / 3) * 100;

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Fade in={submitted}>
          <Card sx={{ 
            textAlign: 'center', 
            p: 6, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: 4
          }}>
            <CheckCircle sx={{ fontSize: 80, mb: 3, opacity: 0.9 }} />
            <Typography variant="h4" gutterBottom>
              Thank You!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We've received your message and will get back to you within 24 hours.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  services: [],
                  budget: '',
                  message: '',
                  timeline: ''
                });
              }}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              Send Another Message
            </Button>
          </Card>
        </Fade>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Contact Info */}
        <Grid size={12} md={4}>
          <Box sx={{ position: 'sticky', top: 100 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Let's Start a Conversation
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Ready to transform your business? Get in touch with our experts.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              {[
                { icon: <Phone />, title: 'Phone', value: '+1 (555) 123-4567' },
                { icon: <Email />, title: 'Email', value: 'hello@brasetech.com' },
                { icon: <LocationOn />, title: 'Office', value: '123 Tech Street, Silicon Valley' },
              ].map((contact, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {contact.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {contact.title}
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {contact.value}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid size={12} md={8}>
          <Card sx={{ p: 4, borderRadius: 4, boxShadow: 4 }}>
            <Box sx={{ mb: 4 }}>
              <LinearProgress 
                variant="determinate" 
                value={progress} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  bgcolor: 'grey.200',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #1976d2, #42a5f5)'
                  }
                }} 
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Step {step + 1} of 3
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              {step === 0 && (
                <Fade in={step === 0}>
                  <Box>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Tell us about yourself
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid size={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          required
                          InputProps={{
                            startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                      <Grid size={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          required
                          InputProps={{
                            startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                      <Grid size={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company"
                          value={formData.company}
                          onChange={handleInputChange('company')}
                          InputProps={{
                            startAdornment: <Business sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                      <Grid size={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone"
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
                          InputProps={{
                            startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>
              )}

              {step === 1 && (
                <Fade in={step === 1}>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      What services are you interested in?
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Select all that apply
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {services.map((service) => (
                        <Chip
                          key={service}
                          label={service}
                          clickable
                          color={formData.services.includes(service) ? 'primary' : 'default'}
                          variant={formData.services.includes(service) ? 'filled' : 'outlined'}
                          onClick={() => handleServiceToggle(service)}
                          sx={{ 
                            borderRadius: 2,
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Typography variant="h6" gutterBottom>
                      Budget Range
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {budgetRanges.map((budget) => (
                        <Chip
                          key={budget}
                          label={budget}
                          clickable
                          color={formData.budget === budget ? 'secondary' : 'default'}
                          variant={formData.budget === budget ? 'filled' : 'outlined'}
                          onClick={() => setFormData(prev => ({ ...prev, budget }))}
                          sx={{ borderRadius: 2 }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Fade>
              )}

              {step === 2 && (
                <Fade in={step === 2}>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Project Details
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Project Description"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange('message')}
                          placeholder="Tell us about your project, goals, and requirements..."
                          required
                          InputProps={{
                            startAdornment: <Message sx={{ mr: 1, color: 'text.secondary', alignSelf: 'flex-start', mt: 1 }} />
                          }}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Preferred Timeline"
                          value={formData.timeline}
                          onChange={handleInputChange('timeline')}
                          placeholder="When would you like to start? Any deadlines?"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => setStep(prev => Math.max(0, prev - 1))}
                  disabled={step === 0}
                  sx={{ borderRadius: 2 }}
                >
                  Previous
                </Button>
                
                {step < 2 ? (
                  <Button
                    variant="contained"
                    onClick={() => setStep(prev => prev + 1)}
                    sx={{ 
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      minWidth: 120
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    startIcon={loading ? null : <Send />}
                    sx={{ 
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      minWidth: 120
                    }}
                  >
                    {loading ? <LinearProgress sx={{ width: 80 }} /> : 'Send Message'}
                  </Button>
                )}
              </Box>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EnhancedContactForm;
