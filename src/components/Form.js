import React, { Component } from 'react';
// import { Text, Button, StyleSheet, View, TextInput, Alert } from 'react-native';
import './Form.css'
// import ApiKeys from "./ApiKeys.js";
// import select from 'react-select';
// import Select from '@material-ui/core/Select';
import Countdown from 'react-countdown';

// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import {modelLinks} from './modelLink.js';

class Form extends Component {
    // Defaults:
    // target_type: 1 (GEOLOCATION_TARGET)
    // hologram_type: 2 (MODEL_HOLOGRAM)
    // data is optional
    // const [location, setLocation] = useState("") // send an address, not longitude and latitude
    // const [keyword, setKeyword] = useState("")  // keyword to search for hologram
    // const [model, setModel] = useState({}) // should be an object, set when name
    // const [allModels, setAllModels] = useState([]) // use this to store all of the Models 
    // let PolyKey
    // let poly_reponse
    // let echoKey

   /* 
    async function loadModels(inputValue) {
        PolyKey = ApiKeys.GooglePoly
        const url = new URL(`https://console.echoAR.xyz/search?key=${PolyKey}&keywords=${keyword}`)
        poly_reponse = await fetch(url)
        poly_response = await poly_response.json()
        setAllModels(poly_response)
        console.log(poly_response);
        return poly_response.map(function (model) {
            return { label: model.name };
        });
    }

    function getModel(model_name) {
        allModels.map(model => {
            if (model.name === model_name) {
                setModel(model) // should be an object
            }
        })
    }
    */
    // function handleSubmit() {
    //     echoKey = ApiKeys.echo
    //     const url = new URL('https://console.echoAR.xyz/upload')
    //     let params;
    //     // make condition for Poly and Sketchfab
    //     if (model.source === "Poly") {
    //         params = new URLSearchParams({
    //             "key": echoKey,
    //             "email": ApiKeys.email, // Sion's email in echoAR
    //             "target_type": 1,
    //             "hologram_type": 2,
    //             "type": "search",
    //             "source": "Poly",
    //             "bin_url": model.bin_url,
    //             "gltf_url": model.gltf_url,
    //             "thumbnail": model.thumbnail,
    //             "png_url": model.png_url, // may be a problem if some don't have (check demo)
    //             "png_path": model.png_path
    //         })
    //     }
    //     if (model.source === "Sketchfab") {
    //         params = new URLSearchParams({
    //             "key": echoKey,
    //             "email": ApiKeys.email, // Sion's email in echoAR
    //             "target_type": 1,
    //             "hologram_type": 2,
    //             "type": "search",
    //             "source": "Poly",
    //             "url": model.url
    //         })
    //     }

    //     fetch(url)
    //         .then(response => {
    //             return console.log(response);
    //         })
    //         .then(json => {
    //             console.log(json);
    //         })


    // }
    // const useStyles = makeStyles((theme) => ({
    //     formControl: {
    //         margin: theme.spacing(1),
    //         minWidth: 120,
    //     },
    //     selectEmpty: {
    //         marginTop: theme.spacing(2),
    //     },
    // }));

    // const classNamees = useStyles();

    constructor(props) {
        super(props);
        this.state = { //fields
            model: '',
            time: 30000,
            end: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({model: event.target.value});
    }

    componentDidMount() {
        setTimeout(()=> this.setState({end: true}), this.state.time)
    }

    render () {
        return (
            <div>
                <h2 className="directions">Quick! You have <Countdown date={Date.now() + this.state.time}/> seconds to hide!</h2>
                <h2 className="directions">Choose your object:</h2>
                <div className="dropdown">
                    <button className="dropbtn">Choose Object</button>
                    <div className="dropdown-content" onChange={this.handleChange}>
                        <a value={modelLinks.corgi}>Corgi</a>
                        <a value="corgi">Corgi</a>
                        <a value="corgi">Corgi</a>
                        <a value="corgi">Corgi</a>
                        <a value="corgi">Corgi</a>
                    </div>
                    {/* <FormControl variant="outlined" classNameName={classNamees.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={model}
                            onChange={handleChange}
                            label="Model"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"https://go.echoar.xyz/cESt"}>Corgi</MenuItem>
                            <MenuItem value={"https://go.echoar.xyz/cESt"}>Corgi</MenuItem>
                            <MenuItem value={"https://go.echoar.xyz/cESt"}>Corgi</MenuItem>
                        </Select>
                    </FormControl> */}
                </div>
            </div>
        )
    }
    
}

export default Form;