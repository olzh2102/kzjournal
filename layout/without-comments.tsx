import Container from '@mui/material/Container';

const WithoutCommentsLayout = ({ children }: { children: React.ReactNode }) => (
    <Container fixed>
        {children}
    </Container>
);

export default WithoutCommentsLayout;
