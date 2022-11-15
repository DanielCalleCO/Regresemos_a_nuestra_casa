import React from 'react'

import './homeFolderView.css'

export const HomeFolderView = () => {
  return (
    <>
            <div className='content-folder-means'>
                <div className="content-means">

                    <h1>Recursos</h1>
                    <div className="books means-folder">
                            <p className='folder-means'> Libros</p>
                    </div>
                    <div className="docs  means-folder">
                        <p className='folder-means'>Documentos</p>
                    </div>
                    <div className="studies  means-folder">
                        <p className='folder-means'>Estudios</p>
                    </div>
                </div>
            </div>
    </>
  )
}

