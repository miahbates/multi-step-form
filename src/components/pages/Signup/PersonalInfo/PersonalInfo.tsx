import Button from "@/components/ui/Button/Button";

const PersonalInfo = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="e.g Stephen King" />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="e.g stephenking@example.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="e.g +447828133038" />
        <Button variant="primary" size="md" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PersonalInfo;
