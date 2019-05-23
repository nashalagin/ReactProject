import React from "react";

class Info extends React.Component{
    render(){
        return (
            <div class="Fields">
                {this.props.country &&
                <div>
                    <p><b>Оператор связи:</b> {this.props.provider}</p>
                    <p><b>Страна:</b> <img src={this.props.flag} height="10px"></img> {this.props.country}</p>
                    <p><b>Регион:</b> {this.props.region}</p>
                    <p><b>Город:</b> {this.props.city}</p>
                    <p><b>Тайм-зона:</b> {this.props.timeZone}</p>
                    <p><b>Дата и Время:</b> {this.props.date}</p>
                    <p><b>Местная валюта:</b> {this.props.currency}</p>  
                </div>
                }
                {this.props.error &&
                    <p class="Error">{this.props.error}</p>}
            </div>
        )
    }

}

export default Info;


/* Корзина


*/