import React from 'react'
import './footer.scss'

export default function Footer () {
    return (
        <footer className="Footer">
            <div className="Footer__top-info">
                <p><strong>thiagorodrigues15@hotmail.com.br</strong></p>
            </div>
            <div className="Footer__bottom-info">
                <p>Desenvolvido por <span className="Footer__bottom-info--my-name"> Thiago Rodrigues</span></p>
            </div>
        </footer>
    )
}
