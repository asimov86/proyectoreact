import React from "react";
import f from "../Footer/Footer.module.css";

export default function Footer(){
    return(

        <>
            <footer className="navbar navbar-fixed-bottom">
                <div className={f.footerStyle} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5>Dirección</h5>
                                <p>
                                    CABA - Argentina <br />
                                    La Boca
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5>Nuestras redes</h5>
                                <ul className="list-inline">
                                    <li>
                                        <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-facebook">@burguenator</i></a>
                                    </li>
                                    <li>
                                        <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-google-plus">@burguenator</i></a>
                                    </li>
                                    <li>
                                        <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-twitter">@burguenator</i></a>
                                    </li>
                                    <li>
                                        <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-instagram">@burguenator</i></a>
                                    </li>
                                    {/*Por qué agrego rel? .... https://mathiasbynens.github.io/rel-noopener/#recommendations*/}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5>Las mejores hamburguesas  de Buenos Aires</h5>
                                <p>Hamburguesas hechas con los productos más frescos y de mayor calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                      
            </footer>

        </>

    )
}