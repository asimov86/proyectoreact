import React from "react";
import "../Footer/Footer.css";
import {Stack} from "react-bootstrap";
import { BsTwitter,  BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImGooglePlus3 } from "react-icons/im";
export default function Footer(){
    return(

        <>
        <div>
            <footer className="footer mt-5">
                <div className="container ">
                    <nav className="row">
                        <div className="col-md-4 mb-4">
                            <h5>Dirección</h5>
                            <p>
                                Costa Rica 5544 <br />
                                CABA - Argentina
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5>Nuestras redes</h5>
                            <Stack direction="horizontal" gap={3}>
                                <div>
                                    <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-facebook"><BsFacebook/></i></a>
                                </div>
                                <div>
                                    <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-google-plus"><ImGooglePlus3/></i></a>
                                </div>
                                <div>
                                    <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-twitter"><BsTwitter/></i></a>
                                </div>
                                <div>
                                    <a  target="_blank" rel="noreferrer" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className="btn-social btn-outline" style={{color: 'inherit', textDecoration: 'inherit'}}><i className="fa fa-fw fa-instagram"><RiInstagramFill/></i></a>
                                </div>
                            </Stack>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5>Las mejores hamburguesas  de Buenos Aires</h5>
                            <p>Hamburguesas hechas con los productos más frescos y de mayor calidad.</p>
                        </div>
                    </nav>
                </div>          
            </footer>
        </div>
        </>

    )
}