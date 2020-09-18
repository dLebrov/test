import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ScrollProblems.css";
import $ from 'jquery'; 

$(document).ready(function() {
    var totalWidth = 0;
    $('.slider-item').each(function(index) {
        totalWidth += parseInt($(this).outerWidth(true), 10);
    });
    $('.slider-win').width(totalWidth);
    $('#sl-next').on('click', function(){  
        var $this = $(this),
        $slider = $this.closest('.slider'),
        $sliderWin = $slider.find('.slider-win'),
        item = $sliderWin.find('.slider-item'),
        pos = item.outerWidth(true); 
        if($sliderWin.css('margin-left') <= '-1200px'){
            alert("work");
            $sliderWin.animate(
                {'margin-left': '0px'}, 
                1000
            ); 
    } else {
        alert("work1");
        $sliderWin.animate(
            {'margin-left': '-='+ pos}, 
            1000
        ); 
    }    
    });
});

const ScrollProblems = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <div className="slider">
                        <div className="slider-win">
                            <div className="slider-item">
                                <div>1</div>
                            </div>
                            <div className="slider-item">
                                <div>2</div>
                            </div>
                            <div className="slider-item">
                                <div>3</div>
                            </div>
                            <div className="slider-item">
                                <div>4</div>
                            </div>
                            <div className="slider-item">
                                <div>5</div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-control">
                        <div id="sl-next" className="sl-btn">вперед</div>      
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ScrollProblems;