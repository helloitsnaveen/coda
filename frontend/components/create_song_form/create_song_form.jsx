import React from 'react';

class CreateSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', 
            description: '', 
            artist_id: 5, 
            imageFile: null,
            trackFile: null
        };
    };

    titleHandleInput(e) {
        this.setState({title: e.currentTarget.value});
    };

    bodyHandleInput(e) {
        this.setState({description: e.currentTarget.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[description]', this.state.description);
        formData.append('song[artist_id]', this.state.artist_id);
        formData.append('song[image]', this.state.imageFile);
        formData.append('song[track]', this.state.trackFile);
        $.ajax({
            url: 'api/songs',
            method: 'POST', 
            data: formData, 
            contentType: false, 
            processData: false
        }).then( () => this.props.history.push('/stream'));
    };

    handleImageFile(e) {
        this.setState({imageFile: e.currentTarget.files[0]});
    };

    handleTrackFile(e) {
        this.setState({trackFile: e.currentTarget.files[0]});
    };

    render() {
        console.log(this.state);

        return (
            <div className='MAIN-FORM-DIV'>
                <form onSubmit={this.handleSubmit.bind(this)} className='FULL-FORM-FORM'>
                        <div className='inner-form-div'>
                            <label className='FORM-MAIN-LABEL'><span className='FORM-MAIN-LABEL-WORD'>upload</span> your track</label>
                            <div className='inner-inner-form-div'>
                                <label className='form-label-title'>title</label>
                                <input className='form-input-title'
                                type="text" 
                                value={this.state.title}
                                onChange={this.titleHandleInput.bind(this)}
                                placeholder='title'
                                />

                                <label className='form-label-description'>description</label>
                                <textarea className='form-input-description'
                                value={this.state.description}
                                onChange={this.bodyHandleInput.bind(this)}
                                placeholder='description'
                                />

                                <label className='form-label-image'>image</label>
                                <input className='form-input-image'
                                type="file"
                                // value=''
                                onChange={this.handleImageFile.bind(this)}
                                />

                                <label className='form-label-track'>track</label>
                                <input className='form-input-track'
                                type="file"
                                // value=''
                                onChange={this.handleTrackFile.bind(this)}
                                />
                                
                                <button className='FORM-SUBMIT-BUTTON'>submit</button>
                            </div>
                        </div>    
                </form>

                <div className='login-visual-div'></div>
            </div>
        );
    };
};

export default CreateSongForm;