import React, {ChangeEvent, useEffect, useState} from 'react';
import {log} from "util";



type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export const  ProfileStatusWithHooks = (props:ProfileStatusPropsType) =>  {

    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    //
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }
    //
    // deactivatedMode = () => {
    //     this.props.updateStatus(this.state.status)
    //     this.setState({
    //         editMode: false
    //     })
    //
    // }
    // onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
    //
    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status:this.props.status
    //         })
    //     }
    // }
    //
    // render() {

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)




    const activateEditMode = () => {
        setEditMode(true)
        }

        const deactivatedMode = () => {
            props.updateStatus(status)
            setEditMode(false)

        }
        const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
        }

       // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
       //      if(prevProps.status !== this.props.status){
       //          this.setState({
       //              status:this.props.status
       //          })
       //      }
       //  }


        return (
            <>
                {
                    !editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                }
                {
                    editMode &&
                    <div>
                        <input
                            value={status}
                            onChange={onStatusChange}
                            onBlur={deactivatedMode}
                            autoFocus={true}/>
                    </div>
                }
            </>
        )
}

