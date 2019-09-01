import React from 'react';
import './CardList.scss';
import CardItem from '../Components/CardList/CardItem';
import Accordion from '../Components/CardList/Accordion/Accordion';
import CardFooter from '../Components/CardList/CardFooter/CardFooter';
import Telefoonboek from '../Components/CardList/Telefoonboek/Telefoonboek';
import { Evenementen, Nieuws, Direct, Blogs, Kwalite, MicroBlog, links, Groepen } from '../Helpers/Data'


const CardList = (props) => {
    return (
        <div className="card-list">
            <ul>
                <li>
                    <Accordion cardTitle="Accordion 1" onlyOne="true" />
                </li>
                <li>
                    <CardItem data={Evenementen} icon="calendar" cardTemplate="Evenementen" cardTitle="Evenementen" footerPrfix="Meer" />
                </li>
                <li>
                    <CardItem data={Nieuws} icon="newspaper" cardTemplate="Nieuws" cardTitle="Nieuws" footerPrfix="Meer" />
                </li>
                <li>
                    <CardFooter cardTitle="toevoegen" footerPrfix="Widget" cardimage="add.svg" />
                </li>
            </ul>
            <ul>
                <li>
                    <CardItem data={Direct} icon="external-link" cardTemplate="Direct" cardTitle="Direct naar" showFooter={false} collection="Card1" />
                </li>
                <li>
                    <CardItem data={Blogs} icon="Shape" cardTemplate="Blog" cardTitle="Blogs" footerPrfix="Meer" />
                </li>
                <li>
                    <CardItem data={Kwalite} icon="kwaliteitshandboek" cardTemplate="Kwalite" cardTitle="kwaliteitshandboek" footerPrfix="Naar" />
                </li>
                <li>
                    <CardItem icon="kwaliteitshandboek" cardTemplate="Peilingen" cardTitle="Peilingen" showFooter={false} />
                </li>
                <li>
                    <CardItem data={links} icon="kwaliteitshandboek" cardTemplate="Kwalite" cardTitle="kwaliteitshandboek" showFooter={false} />
                </li>
            </ul>
            <ul className="last-List">
                <li>
                    <Telefoonboek />
                </li>
                <li className="second">
                    <CardItem  data={MicroBlog} icon="Shape" cardTemplate="MicroBlog" cardTitle="microblog" footerPrfix="Toon" />
                </li>
                <li className="third">
                    <CardItem  data={Groepen} icon="groups" cardTemplate="Direct" cardTitle="Mijn groepen" footerPrfix="Meer" collection="Card2" />
                </li>
            </ul>
        </div>
    )
}

export default CardList

