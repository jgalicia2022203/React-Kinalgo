import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import '../Pay/Pay.css';


// Crear estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Crear documento
const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>First Name: {formData.firstName}</Text>
        <Text>Last Name: {formData.lastName}</Text>
        <Text>Phone Number: {formData.phoneNumber}</Text>
      </View>
      <View style={styles.section}>
        <Text>Name on Card: {formData.nameOnCard}</Text>
        <Text>Card Number: {formData.cardNumber}</Text>
        <Text>Expiration Date: {formData.expirationDate}</Text>
        <Text>Security Code: {formData.securityCode}</Text>
      </View>
    </Page>
  </Document>
);

// Componente para el enlace de descarga del PDF
const InvoicePDF = ({ formData }) => {
  return (
    <div className="download-container">
  <PDFDownloadLink
    document={<MyDocument formData={formData} />}
    fileName="invoice.pdf"
    className="download-btn"
  >
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Complete Booking!')}
  </PDFDownloadLink>
</div>

  );
}

export default InvoicePDF;
