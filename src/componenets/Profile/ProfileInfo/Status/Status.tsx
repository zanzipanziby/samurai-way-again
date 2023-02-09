import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

export class ProfileStatus extends React.Component <any> {

    state =  {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.deactivatedMode} autoFocus={true} />
                    </div>
                }


            </>
        )
    }

};

