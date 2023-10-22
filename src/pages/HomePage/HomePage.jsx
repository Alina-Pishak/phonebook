const { Typography, Box } = require('@mui/material');

const HomePage = () => {
  return (
    <Box
      sx={{
        width: 500,
        margin: '0 auto',
        marginTop: '100px',
        backgroundColor: '#afc4ef',
        borderRadius: '15px',
        padding: '10px',
      }}
    >
      <Typography variant="h5" color="#fff" textAlign="center">
        Welcome to Phonebook App. There is you can create a new account(or login
        if you have an account) and to save your contacts.
      </Typography>
    </Box>
  );
};

export default HomePage;
