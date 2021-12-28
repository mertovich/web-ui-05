import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import arrowIcon from '../images/arrowIcon.svg'
import '../App.css'

export default class OneSection extends Component {
    render() {
        return (
            <div className='oneSectionConteiner' >
                <h1>Wood cube & holiday</h1>

                <Row style={{
                    marginTop: '10%'
                }} >
                    <button type='button' className='oneSectionButton'>
                        <p>Paces</p>
                        <img style={{
                            height: '50px',
                        }} src={arrowIcon} />
                    </button>

                    <button type='button'  className='oneSectionButton'>
                        <p>Discover</p>
                        <img style={{
                            height: '50px',
                        }} src={arrowIcon} />
                    </button>

                    <button type='button'  className='oneSectionButton'>
                        <p>Floor map</p>
                        <img style={{
                            height: '50px',
                        }} src={arrowIcon} />
                    </button>
                </Row>

            </div>
        )
    }
}
