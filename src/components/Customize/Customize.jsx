import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box, InputLabel, MenuItem,
    FormControl, Select, Grid, Button
} from '@mui/material';


function Customize() {

    const defaultButtonLayout = {
        button1: '',
        button2: '',
        button3: '',
        button4: '',
        button5: '',
        button6: '',
        button7: '',
        button8: '',
        button9: ''
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const category = useSelector(store => store.treatments)
    const user = useSelector(store => store.user)

    const [txCategory, setTxCategory] = useState('');
    const [buttonLayout, setButtonLayout] = useState(defaultButtonLayout);

    const options = category;

    const hiddenFill = () => {
        setTxCategory('medication')
        setButtonLayout({
            button1: 35,
            button2: 18,
            button3: 40,
            button4: 22,
            button5: 19,
            button6: 21,
            button7: 41,
            button8: 42,
            button9: 23
        })
        console.log('hiddenFill clicked');
    }

    const handleChange = (e) => {
        setTxCategory(e.target.value)
        console.log('tx cat: ', txCategory);
    }

    const handleButtonChange = (e, button) => {
        console.log('target.value: ', e.target.value);

        setButtonLayout({ ...buttonLayout, [button]: e.target.value })
        console.log('button layout after set in handleButtonChange: ', buttonLayout);
    }

    const handleClick = () => {
        // let layout = [];
        // for(let button in buttonLayout){
        //     console.log('typeof button: ', typeof button);
        //     console.log('typeof: ', (typeof button == 'string'), 'button: ', button);
        //     if(typeof button == 'number'){
        //         layout.push(button);
        //     }
        // }
        // console.log('layout in handleclick: ', layout)
        dispatch({ type: 'POST_USER_LAYOUT', payload: buttonLayout, category: txCategory })
        history.push('/home');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_TREATMENTS', payload: txCategory })
    }, [txCategory])

    return (
        <div>
            <div>User: {user.username} </div>
            <Grid sx={{ textAlign: 'center', width: '75%', m: 'auto' }}>
                <h2 onClick={hiddenFill}>Customize your button layout here</h2>
            </Grid>
            <Box>
                <FormControl sx={{ display: 'flex', justifyContent: 'center', padding: '10px', width: '80%' }}>
                    <InputLabel id='tx-category'>Select a treatment category</InputLabel>
                    <Select
                        labelId='tx-category'
                        id='tx-dropdown'
                        value={txCategory}
                        label='Category'
                        onChange={handleChange}
                    >
                        <MenuItem key={1} value={'airway'}>Airway</MenuItem>
                        <MenuItem key={2} value={'chest'}>Chest</MenuItem>
                        <MenuItem key={3} value={'access'}>Access</MenuItem>
                        <MenuItem key={4} value={'medication'}>Medication</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ marginLeft: '3%' }}>
                {/* <FormControl> */}
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={5}>
                        <InputLabel>Button 1</InputLabel>
                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button1'
                            value={buttonLayout.button1}
                            onChange={(e) => handleButtonChange(e, 'button1')}
                        >
                            {options.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 2</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button2'
                            label="Button 2"
                            value={buttonLayout.button2}
                            onChange={(e) => handleButtonChange(e, 'button2')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 3</InputLabel>
                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button3'
                            label='Button 3'
                            value={buttonLayout.button3}
                            onChange={(e) => handleButtonChange(e, 'button3')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 4</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button4'
                            labelId='tx5'
                            label='Button 4'
                            value={buttonLayout.button4}
                            onChange={(e) => handleButtonChange(e, 'button4')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 5</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button5'
                            label='Button 5'
                            value={buttonLayout.button5}
                            onChange={(e) => handleButtonChange(e, 'button5')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 6</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button6'
                            label='Button 6'
                            value={buttonLayout.button6}
                            onChange={(e) => handleButtonChange(e, 'button6')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 7</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button7'
                            label='Button 7'
                            value={buttonLayout.button7}
                            onChange={(e) => handleButtonChange(e, 'button7')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 8</InputLabel>

                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px' }}
                            id='button8'
                            label='Button 8'
                            value={buttonLayout.button8}
                            onChange={(e) => handleButtonChange(e, 'button8')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel>Button 9</InputLabel>
                        <Select
                            // labelId='button2'
                            sx={{ width: '130px', height: '60px', marginBottom: '8%' }}
                            id='button9'
                            label='Button 9'
                            value={buttonLayout.button9}
                            onChange={(e) => handleButtonChange(e, 'button9')}
                        >
                            {category.map(treatment => {
                                return (
                                    <MenuItem key={treatment.id} value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                </Grid>

                {/* </FormControl> */}
            </Box>
            <Grid sx={{ width: '100%', m: 'auto' }}>
                <Button onClick={handleClick} variant='contained'>Save Layout</Button>
            </Grid>

        </div>
    )
}

export default Customize;
