import DashboardBox from '@/components/DashboardBox';
import { Box, useMediaQuery, useTheme } from '@mui/material';

type Props = {};

const gridTemplateLargeScreens = `
    "a d g"
    "a d g"
    "a d g"
    "a d h"
    "b e h"
    "b e h"
    "b f i"
    "c f i"
    "c f j"
    "c f j"
`;
const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");
    const { palette } = useTheme();
    return (
        <Box width="100%" height="100%" display="grid" gap="1.5rem"
            sx={
                isAboveMediumScreen ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
            } : {
                gridTemplateColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
            }}
        >
            <DashboardBox bgcolor="#fff" gridArea="a" />
            <DashboardBox bgcolor="#fff" gridArea="b" />
            <DashboardBox bgcolor="#fff" gridArea="c" />
            <DashboardBox bgcolor="#fff" gridArea="d" />
            <DashboardBox bgcolor="#fff" gridArea="e" />
            <DashboardBox bgcolor="#fff" gridArea="f" />
            <DashboardBox bgcolor="#fff" gridArea="g" />
            <DashboardBox bgcolor="#fff" gridArea="h" />
            <DashboardBox bgcolor="#fff" gridArea="i" />
            <DashboardBox bgcolor="#fff" gridArea="j" />
        </Box>
  )
}

export default Dashboard