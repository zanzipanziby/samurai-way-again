import React, {ChangeEvent} from 'react';



type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState({
            editMode: false
        })

    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            onBlur={this.deactivatedMode}
                            autoFocus={true}/>
                    </div>
                }
            </>
        )
    }

}

