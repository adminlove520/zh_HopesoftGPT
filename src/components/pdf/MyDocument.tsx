import React from "react";
import { Document, Page, Text, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Noto Sans SC",
  src: "http://fonts.gstatic.com/s/notosanssc/v26/k3kIo84MPvpLmixcA63oeALZhaCt9yX6-q2CGg.otf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
  },
  section: {
    fontSize: 12,
    fontFamily: "Noto Sans SC",
    marginBottom: 20,
    lineHeight: 1.5,
  },
});

interface MyDocumentProps {
  content: string;
}

const MyDocument: React.FC<MyDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>{content}</Text>
    </Page>
  </Document>
);

export default MyDocument;
