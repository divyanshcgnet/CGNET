'use client'

import TextField from '@mui/material/TextField'
import { Dispatch } from 'react'

interface IEmailInput {
  value: string
  setValue: Dispatch<string>
  err: boolean
}

export default function EmailInput({ value, setValue, err }: IEmailInput) {
  return (
    <div className="flex flex-col">
      <TextField
        id="outlined-read-only-input"
        label="Email"
        type='email'
        error={err}
        InputProps={{
          style: {
            color: 'white',
            borderRadius: '0.5rem',
            border: "#FFFFFF99"
          },
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {err && (
        <span className="text-themeErr mt-2 text-xs font-bold">
          Please Enter A valid Email ID
        </span>
      )}
    </div>
  )
}
