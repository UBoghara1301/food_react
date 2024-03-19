import React from "react";

const Item = (props) => {
    return (
        <>
            <div class="item">
                <h4>
                    <div class="items">
                        <div class="item-inner">
                            <div class="image">
                                <div class="img">
                                    <img src={props.image} width="268px" height="auto" alt="pizza" />
                                </div>
                                <div class="icons">
                                    <div class="buttons btn-1">
                                        <a href="#"><i class="fa-solid fa-heart"></i></a>
                                    </div>
                                    <div class="buttons btn-2">
                                        <a href="#"><i class="fa-solid fa-shuffle"></i></a>
                                    </div>
                                    <div class="buttons btn-3">
                                        <a href="#"><i class="fa-regular fa-eye"></i></a>
                                    </div>
                                </div>
                                <div class="contain">
                                    <div class="title-rating">
                                        <div class="title item">
                                            <h4><a href="#">peppiPizza</a></h4>
                                        </div>
                                        <div class="rating item">
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-regular fa-star"></i></span>
                                            <span><i class="fa-regular fa-star"></i></span>
                                        </div>
                                    </div>
                                    <div class="prize-btn">
                                        <div class="prize item">
                                            <p>$220</p>
                                        </div>
                                        <div class="btn item">
                                            <a href="#">order now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </h4>
            </div>
        </>
    );
}

export default Item;