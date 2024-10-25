import { Dispatch } from 'react'
import OtpInput from 'react-otp-input'

export default function OTPfield({
  err,
  setOtp,
  otp,
}: {
  err: boolean
  otp: string
  setOtp: Dispatch<string>
}) {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      inputType="number"
      numInputs={6}
      renderSeparator={<span className="ml-1 mr-1"></span>}
      renderInput={(props) => <input {...props} />}
      // containerStyle={{
      //   margin: '20px 0px',
      // }}
      inputStyle={{
        background: 'transparent',
        color: 'white',
        fontSize: '16px',
        borderColor: err ? '#CC2B2D' : 'white',
        borderRadius: '5px',
        borderWidth: '1px',
        outline: 'none',
        width: '40px',
        height: '45px',
      }}
    />
  )
}
