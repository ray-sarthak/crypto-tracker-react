import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import uniqid from 'uniqid';
import Grid from '../Grid/Grid';
import Lists from '../Lists/Lists';
import "./Styles.css"

export default function LabTabs({coins}) {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const style={
  color:"white",
  width:"50vw",
  fontSize:"1.2rem",
  fontWeight:600,
  fontFamily:"Inter",
  textTransform:"capitalize"
};

  return (
    <div style={{backgroundColor:"var( --dark)"}} >
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
           
          </TabList>
        </div>

       <TabPanel value="List">
  <table className='list-table'>
    {coins.map((coin, i) => (
      <Lists coin={coin} key={i} />
    ))}
  </table>
</TabPanel>

        <TabPanel value="Grid" ><div className='grid-flex'>{coins.map((coin,i)=>(<Grid coin={coin} key={i} />))}</div></TabPanel>
        
      </TabContext>
    </div>
  );
}