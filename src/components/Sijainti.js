import React, {Component} from 'react';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Palkki from './palkki';



const TOKEN = 'pk.eyJ1IjoiY2FyZGlhZ25vc2lzIiwiYSI6ImNqdXEzZnVjbzF0dGE0ZHB3MXhuZGhqamUifQ.237hjiPgDdlIxSg_LVjdTA';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

/*TOOD:::
* tää pitäs saada responsiiviseksi, reactin kirjasto ei tuo valmista ratkaisua
*upd: leveys responsiivinen korkaus ei toiminu vas tavalla
* https://github.com/uber/react-map-gl/issues/604 Kokeilla tätä uudestaan
*
* */
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 63.1053423,
                longitude: 21.5927816,
                zoom: 14,
                bearing: 0,
                pitch: 0,
                width: "100%",
                height: 520,
            }
        };
    }
    render() {
        const {viewport} = this.state;
        return (
            <React.Fragment>
                <div>
                    <Palkki otsikko="Auton sijainti"/>

                    <MapGL
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxApiAccessToken={TOKEN}>
                        <Marker latitude={63.1053423} longitude={21.5927816} offsetLeft={-20} offsetTop={-10}>
                            <div><LocationOnIcon
                                fontSize="large"
                            /></div>
                        </Marker>
                        <div className="nav" style={navStyle}>
                            <NavigationControl/>
                        </div>
                    </MapGL>
                </div>
            </React.Fragment>
        );
    }
}