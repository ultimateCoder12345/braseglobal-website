import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Alert,
    CircularProgress,
} from "@mui/material";
import {
    Email,
    Phone,
    LocationOn,
    AccessTime,
    Send,
    CheckCircle,
    Business,
    Support,
} from "@mui/icons-material";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import CustomMap from "../../homepage/components/CustomMap/CustomMap";
import ParticleBackground from "../../homepage/components/ParticleSwarm/ParticleSwarmCanvas";

// Contact information data
const contactInfo = [
    {
        icon: <Email />,
        title: "Email Us",
        primary: "kranthi@brasetech.com",
        description: "Send us an email anytime",
    },
    {
        icon: <Phone />,
        title: "Call Us",
        primary: "+61 02 8985 7384",
        secondary: "+91 77022 47788",
        description: "Mon-Fri from 9am to 6pm",
    },
    {
        icon: <LocationOn />,
        title: "Visit Us",
        primary: "7/16 Filey Street, Blacktown, NSW 2148 ",
        secondary: "Sydney Head Office",
        description: "Our main office location",
    },
    {
        icon: <AccessTime />,
        title: "Business Hours",
        primary: "Monday - Friday: 9:00 AM - 6:00 PM",
        secondary: "Saturday: 9:00 AM - 2:00 PM",
        description: "Pacific Standard Time",
    },
];

// Office locations
const offices = [
    {
        city: "Sydney",
        address: "16 Filey St, Blacktown NSW 2148,Australia",
        phone: "+61 02 8985 7384",
        email: "kranthi@brasetech.com",
        isHeadquarters: true,
    },
    {
        city: "Hyderabad",
        address: "manjeera trinity corporate ,kphb phase 1,kukatpally",
        phone: "+91 77022 47788",
        //email: "kranthi@brasetech.com",
        isHeadquarters: false,
    },
    {
        city: "Melbourne",
        address: "Collins Street, VIC 3000",
        //email: "kranthi@brasetech.com",
        isHeadquarters: false,
    },
    {
        city: "US Office",
        address: "16854 Table Rock Dr, Frisco, Texas 75035",
        phone: "+44 20 7123 4567",
        //email: "kranthi@brasetech.com",
        isHeadquarters: false,
    },
];

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    serviceType: string;
}

export const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        serviceType: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "success" | "error" | null
    >(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Initialize EmailJS (replace with your actual service details)
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

            const templateParams = {
                to_name: "Brase Tech Team",
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone: formData.phone,
                company: formData.company,
                service_type: formData.serviceType,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                templateParams,
            );

            // Reset form on success
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: "",
                serviceType: "",
            });

            setSubmitStatus("success");
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ParticleBackground />
            <Box sx={{ pt: 10, position: 'relative', zIndex: 1 }}>
            {/* Hero Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box textAlign="center" sx={{ mb: 8 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                        Contact Us
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        Let's discuss your project and how we can help
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ maxWidth: 600, mx: "auto" }}
                    >
                        Ready to transform your business with cutting-edge
                        technology? Get in touch with our expert team to discuss
                        your requirements and receive a personalized solution.
                    </Typography>
                </Box>
            </Container>

            {/* Contact Information Cards */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Grid container spacing={4}>
                    {contactInfo.map((info, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    textAlign: "center",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mb: 2,
                                            color: "primary.main",
                                        }}
                                    >
                                        {React.cloneElement(info.icon, {
                                            fontSize: "large",
                                        })}
                                    </Box>
                                    <Typography variant="h6" gutterBottom>
                                        {info.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="primary.main"
                                        gutterBottom
                                    >
                                        {info.primary}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {info.secondary}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {info.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Main Contact Section */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ mb: 3 }}
                            >
                                Send us a Message
                            </Typography>

                            {submitStatus === "success" && (
                                <Alert
                                    severity="success"
                                    sx={{ mb: 3 }}
                                    icon={<CheckCircle />}
                                >
                                    Thank you for your message! We'll get back
                                    to you within 24 hours.
                                </Alert>
                            )}

                            {submitStatus === "error" && (
                                <Alert severity="error" sx={{ mb: 3 }}>
                                    Something went wrong. Please try again or
                                    contact us directly.
                                </Alert>
                            )}

                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Service Type"
                                            name="serviceType"
                                            select
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            <option value=""></option>
                                            <option value="web-development">
                                                Web Development
                                            </option>
                                            <option value="mobile-development">
                                                Mobile App Development
                                            </option>
                                            <option value="cloud-solutions">
                                                Cloud Solutions
                                            </option>
                                            <option value="data-analytics">
                                                Data Analytics
                                            </option>
                                            <option value="cybersecurity">
                                                Cybersecurity
                                            </option>
                                            <option value="custom-software">
                                                Custom Software
                                            </option>
                                            <option value="consultation">
                                                Consultation
                                            </option>
                                        </TextField>
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            multiline
                                            rows={6}
                                            variant="outlined"
                                            placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={isSubmitting}
                                            startIcon={
                                                isSubmitting ? (
                                                    <CircularProgress
                                                        size={20}
                                                    />
                                                ) : (
                                                    <Send />
                                                )
                                            }
                                            sx={{ minWidth: 200 }}
                                        >
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Contact Information Sidebar */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ position: "sticky", top: 100 }}>
                            {/* Quick Contact */}
                            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Quick Contact
                                </Typography>
                                <List>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon>
                                            <Email color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Email"
                                            secondary="kranthi@brasetech.com"
                                        />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon>
                                            <Phone color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Phone"
                                            secondary="+61 02 8985 7384"
                                        />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon>
                                            <Support color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Support"
                                            secondary="24/7 Available"
                                        />
                                    </ListItem>
                                </List>
                            </Paper>

                            {/* Response Time */}
                            <Paper elevation={2} sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Response Time
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    paragraph
                                >
                                    We typically respond to all inquiries within
                                    24 hours during business days. For urgent
                                    matters, please call us directly.
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1,
                                    }}
                                >
                                    <Chip
                                        label="24h Response"
                                        color="primary"
                                        size="small"
                                    />
                                    <Chip
                                        label="Free Consultation"
                                        color="secondary"
                                        size="small"
                                    />
                                    <Chip
                                        label="No Obligation"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Office Locations */}
            <Box sx={{ bgcolor: "grey.50", py: 8, mt: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        gutterBottom
                        sx={{ mb: 6 }}
                    >
                        Our Offices
                    </Typography>
                    <Grid container spacing={4}>
                        {offices.map((office, index) => (
                            <Grid size={{ xs: 12, md: 3 }} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        transition:
                                            "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: 4,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                        >
                                            <Business
                                                color="primary"
                                                sx={{ mr: 1 }}
                                            />
                                            <Typography variant="h6">
                                                {office.city}
                                            </Typography>
                                            {office.isHeadquarters && (
                                                <Chip
                                                    label="HQ"
                                                    color="primary"
                                                    size="small"
                                                    sx={{ ml: 1 }}
                                                />
                                            )}
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            paragraph
                                        >
                                            {office.address}
                                        </Typography>
                                        {office.phone && (
                                            <Typography
                                                variant="body2"
                                                color="primary.main"
                                                gutterBottom
                                            >
                                                {office.phone}
                                            </Typography>
                                        )}
                                        <Typography
                                            variant="body2"
                                            color="primary.main"
                                        >
                                            {office.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Map Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    sx={{ mb: 4 }}
                >
                    Our Locations Worldwide
                </Typography>
                <CustomMap />
            </Container>
        </Box>
        </>
    );
};

export default ContactPage;