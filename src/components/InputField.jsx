import Form from "react-bootstrap/Form"

export default function InputField({ error, fieldRef, label, name, placeholder, type }) {
    return (
        <Form.Group controlId={name} className="InputField">
	    {/* Form label. Only include if label is passed */}
	    {label && <Form.Label>{label}</Form.Label>}

	    {/* Actual form control */}
	    <Form.Control
	        type={type || "input"}
	        placeholder={placeholder}
	        ref={fieldRef}>
	    </Form.Control>

	    {/* Errors */}
	    <Form.Text className="text-danger">{error}</Form.Text>
	</Form.Group>
    );
}
