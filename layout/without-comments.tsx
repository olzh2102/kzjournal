import Container from '@mui/material/Container';

const WithoutCommentsLayout = ({ children }: { children: React.ReactNode }) => (
    <Container fixed style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
    </Container>
);

export default WithoutCommentsLayout;
