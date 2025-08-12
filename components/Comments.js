'use client';
import React, { useState } from 'react'

import {comments} from  '../data/datos';

const Comments = () => {


  return (
    <div>
        <h4>Comentarios</h4>


        <ul>
           {
            comments.map((comment, index) => (
                <li key={comment.uuid} className=' mt-4 px-8 py-4'>
                     <p className='font-bold'>{comment.author}</p>
                     <p className='text-gray-700'>{comment.text}</p>
                </li>
            ))
           } 
        </ul>

        <div className='mt-10 '>
            <input type='text' placeholder='Escribe un comentario...' className='flex p-4 rounded-xl shadow-md' />

            <button className='my-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800'>Enviar</button>
        </div>
    </div>
  )
}

export default Comments