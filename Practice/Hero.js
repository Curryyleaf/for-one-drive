import React  from "react";
import { useContext , useState } from "react";
import Logo from "./image ?hero "
import { useGlobalContext } from "./Context";

const Hero =()=>{
    const {closeSubMenu} = useGlobalContext();

    return(
        <section className="hero" onMouseOver={ closeSubMenu}>
            <div className=" hero-center">
                <h2> Innovation , creation , community . All in the palm of your hands 
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repudiandae temporibus unde nobis vero alias earum quasi harum est ratione! Accusamus nam eveniet laudantium debitis eos earum sequi neque molestias.
                Ipsa, dolor atque cupiditate praesentium nesciunt aut sequi repellat dolorem voluptatem quos pariatur minima quibusdam, amet fuga debitis repudiandae autem error! Necessitatibus consequuntur eos quia nihil labore provident repellat consequatur!
                Nemo nesciunt qui laborum provident, error obcaecati dolorum dolor, aliquid, mollitia quibusdam odit quia! Optio, commodi veritatis perferendis qui nulla cumque libero perspiciatis voluptatibus! Fugit deleniti quod odit voluptatem inventore?
                Tempora voluptate odit amet quis qui minima deleniti. Ad quos fuga, dolor quis omnis debitis recusandae pariatur, provident ullam similique ex laudantium impedit quia perspiciatis ipsum sunt alias, suscipit voluptas!
                Earum, nulla consequuntur? Ducimus optio fugit possimus hic, reiciendis soluta, sequi cum nostrum exercitationem delectus est sit autem rem adipisci facilis recusandae veniam consectetur unde. Consequuntur molestiae nemo corrupti accusantium?</p>
            </div>
            <div className=" hero-image">
                {Logo}
            </div>
        </section>
    )
}