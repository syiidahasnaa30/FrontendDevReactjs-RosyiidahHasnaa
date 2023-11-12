import { Box, LinearProgress } from "@mui/material"

const LoadingPage = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
            <h3>Please wait</h3>
        </Box>
    )
}
export default LoadingPage