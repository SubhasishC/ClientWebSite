import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import PageTitle from './PageTitle'

class HomePage extends React.Component {
    render() {

        const images = [
            { url: "src/components/images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
        ];
            return (
                <div>
                    <PageTitle title='Home page' />
                    <SimpleImageSlider
                        style={{ position: 'left',display: 'block',margin: "0 auto", marginTop: "50px" }}
                        width={600}
                        height={400}
                        images={images}
 
                    />
                </div>
            );
    }
}

export default HomePage