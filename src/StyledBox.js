import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
    background-color: #F8F8F8;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 16px;
    display: flex; /* Arrange title and content horizontally */
    align-items: center; /* Vertically center content within the box */
    gap: 16px; /* Spacing between title and content */
`;
export default StyledBox;