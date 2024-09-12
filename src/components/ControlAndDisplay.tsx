import React, { useState } from 'react';
import { Box, Grid, TextField, Chip, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, List, ListItem, ListItemText, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {X} from './ui/SelectX'
//import {SelectBMI} from './ui/SelectBMI'
import {Ethnicity} from './ui/SelectEthnicity.tsx'
//import { StartTime } from './ui/StartTime.tsx';
//import {EndTime} from './ui/EndTime.tsx'
//import {Apply} from './ui/ApplyButton.tsx'
import { Blocks, Columns, Rows } from 'lucide-react';
import { Sex } from './ui/SelectSex.tsx';
import { BMI } from './ui/SelectBMI.tsx';
import { DatePickerDemo } from './ui/SetTime.tsx';
import { StartTime } from './ui/StartTime.tsx';
import { EndTime } from './ui/EndTime.tsx';
import { Button } from "@/components/ui/button"
import {Apply} from './ui/ApplyButton.tsx'
import BlueButton from './ui/BlueButton.tsx';

const initialDummyData = [
    { time: 'Jan', WBC: 6000, HGB: 14, RBC: 4.5, diagnosis: 'Diagnosis Method 1', sex: 'Male' },
    { time: 'Feb', WBC: 6200, HGB: 13.9, RBC: 4.6, diagnosis: 'Diagnosis Method 2', sex: 'Female' },
    { time: 'Mar', WBC: 6100, HGB: 14.1, RBC: 4.7, diagnosis: 'Diagnosis Method 3', sex: 'Male' },
    { time: 'Apr', WBC: 6300, HGB: 14.2, RBC: 4.8, diagnosis: 'Diagnosis Method 1', sex: 'Female' },
    { time: 'May', WBC: 6400, HGB: 14.3, RBC: 4.9, diagnosis: 'Diagnosis Method 4', sex: 'Male' },
    { time: 'Jun', WBC: 6500, HGB: 14.5, RBC: 5.0, diagnosis: 'Diagnosis Method 2', sex: 'Female' },
];

const ControlAndDisplay: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedMetric, setSelectedMetric] = useState('WBC');
    const [sex] = useState('');
    const [filteredData, setFilteredData] = useState(initialDummyData);

    const handleFilterApply = () => {
        const newFilter = `Sex: ${sex}`;
        if (!selectedFilters.includes(newFilter) && sex) {
            setSelectedFilters((prev) => [...prev, newFilter]);
        }

        // Apply filtering based on the selected sex
        const newFilteredData = initialDummyData.filter((item) => !sex || item.sex === sex);
        setFilteredData(newFilteredData);
    };

    const handleChipDelete = (chipToDelete: string) => {
        setSelectedFilters((chips) => chips.filter((chip) => chip !== chipToDelete));
        // Reset to initial data when a filter is removed
        setFilteredData(initialDummyData);
    };

    const handleMetricChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMetric(event.target.value);
    };

    // const handleSexChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setSex(event.target.value as string);
    // };

    return (
        <Box sx={{ padding: 2}}>
            {/* Top Section: Filters */}
            <Box sx={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, padding: 2, marginBottom: 4 }}>
            <Box sx={{flexDirection
                :'row'
            }} >
                    <Box sx={{m: 2}}>
                        {/* Todo: Move this icon-title pattern into component */}
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                            <TuneIcon sx={{ mr: 1, mb: 1, color: 'purple' }} />
                        <Typography variant="h5" component="h2" gutterBottom>
                            Control Panel
                        </Typography>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 4,
                                left: 0,
                                width: '100%',
                                height: 2,
                                bgcolor: 'purple',
                            }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',marginTop:4,marginBottom: 4, border: '4px solid purple', // 加粗边框，4px 粗度，黑色
      borderRadius: '8px',justifyContent:'center',alignItems:'center',}}>
                        
                        
                        
                        <div style={{margin:20}}><Sex /></div>
                        <div style={{margin:20}}><BMI /></div>
                        
                        <div style={{margin:20}}><X /></div>
                       
                        <div style={{margin:20}}><StartTime/></div>
                        <div style={{margin:20}}><EndTime/></div>
                        <div style={{margin:20}}><BlueButton/></div>
                       
                     
                        

                        
                        
                        
                  
                    </Box >
                    <Grid item xs={12}>
                        {selectedFilters.map((filter, index) => (
                            <Chip
                                key={index}
                                label={filter}
                                onDelete={() => handleChipDelete(filter)}
                                sx={{ marginRight: 1, marginBottom: 1 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* Bottom Section */}
            <Box sx={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, padding: 2 }}>
                <Box sx={{mb: 2}}>
                    {/* Todo: Move this icon-title pattern into component */}
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                        <NewspaperIcon sx={{ mr: 1, mb: 1, color: 'purple' }} />
                    <Typography variant="h5" component="h2" gutterBottom>
                        Trends
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 4,
                            left: 0,
                            width: '100%',
                            height: 2,
                            bgcolor: 'purple',
                        }}
                        />
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {/* Left Side: Top 5 Diagnosis Methods */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">Top 5 Diagnosis Methods</Typography>
                        <List>
                            {filteredData.slice(0, 5).map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item.diagnosis} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Right Side: Line Charts */}
                    <Grid item xs={12} md={8}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Select Metric</FormLabel>
                            <RadioGroup
                                row
                                aria-label="metric"
                                name="metric"
                                value={selectedMetric}
                                onChange={handleMetricChange}
                            >
                                <FormControlLabel value="WBC" control={<Radio />} label="WBC" />
                                <FormControlLabel value="HGB" control={<Radio />} label="HGB" />
                                <FormControlLabel value="RBC" control={<Radio />} label="RBC" />
                            </RadioGroup>
                        </FormControl>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey={selectedMetric} stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ControlAndDisplay;
