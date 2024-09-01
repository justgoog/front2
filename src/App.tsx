import { Box } from '@mui/material'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import OverviewSection from './components/OverviewSection'

function App() {

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <OverviewSection 
          title="Patients Overview" 
          content="This is a card-like section created using MUI's Paper component."
        // sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
        />
        {/* Add more CardSection components as needed */}
      </Box>

    </>
  )
}

export default App
