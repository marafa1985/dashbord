import React, { Component } from 'react';
import InputText from '../Components/InputText/InputText';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Naam: "",
            Email: "",
            Onderwerp: "",
            Bericht: ""
        }
    }

    submitForm = (e) => {
        e.preventDefault();
    }
    inputChange = (e) => {
        this.setState({
            [e.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <div className="contact">
                    <div className="title">
                        Contact pagina
                </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis, magna nec efficitur tempor, dui eros fringilla tellus, vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi.
                </p>
                    <InputText name="naam" label="Naam:" type="text" value={this.state.naam} onChange={this.inputChange.bind()} />
                    <InputText name="email" label="Email:" type="email" value={this.state.email} onChange={this.inputChange} />
                    <InputText name="onderwerp" label="Onderwerp:" type="text" value={this.state.onderwerp} onChange={this.inputChange} />
                    <InputText name="bericht" label="Bericht:" type="textarea" value={this.state.bericht} onChange={this.inputChange} />
                    <div className="control">
                        <button className="btn" >Plaats</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Contact

