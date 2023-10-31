'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react'


export default function ShadowInputs() {
  
  const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');
    const inputName = useRef(null);
  
  return (
    <div className='flex bg-fuchsia-200 p-5 mt-48 md:mt-40  justify-center'>
      <form className="flex w-5/6 md:w-1/2 flex-col gap-4">
        <div>
          <div>
          <div className="mb-2 block">
              <Label
                htmlFor="dni"
                value="DNI"
              />
            </div>
            <TextInput
              id="dni"
              placeholder="Ingrese su DNI"
              required
              shadow
              type="text"
              sizing="sm"
            />
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Nombre"
              />
            </div>
            <TextInput
              id="name"
              placeholder="Nombre"
              required
              shadow
              type="text"
              sizing="sm"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="lastName"
                value="Apellido"
              />
            </div>
            <TextInput
              id="lastName"
              placeholder="Apellido"
              required
              shadow
              type="text"
              sizing="sm"
            />
          </div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Ingrese su correo electronico"
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
            shadow
            type="email"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="pass"
              value="Ingrese su contraseña"
            />
          </div>
          <TextInput
            id="pass"
            required
            shadow
            type="password"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="repeat-password"
              value="Confirme su contraseña"
            />
          </div>
          <TextInput
            id="repeat-password"
            required
            shadow
            type="password"
            sizing="sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label
            className="flex"
            htmlFor="agree"
          >
            <p>
              Acepto los
            </p>
            <Link
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              <p>
                  terminos and condiciones
              </p>
            </Link>
          </Label>
        </div>
        <Button className="bg-indigo-500" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  )
}


