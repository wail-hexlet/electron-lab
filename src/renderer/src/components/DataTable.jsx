import { useState } from 'react'
import Table from '@mui/joy/Table'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import Stack from '@mui/joy/Stack'

// eslint-disable-next-line react/prop-types
const DataTable = ({ initUsers = [] }) => {
  const [data, setData] = useState(initUsers)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="solid" size="md" color="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>
      <br />
      <br />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new user</DialogTitle>
          <DialogContent>Fill in the Last Name and First Name of new user.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              const formData = {
                LastName: event.currentTarget[0].value,
                FirstName: event.currentTarget[1].value
              }
              setData([...data, { ...formData, id: data.length }])
              setOpen(false)
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Add User</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <Table style={{ width: '300px' }}>
        <thead>
          <tr>
            <th style={{ width: '150px' }}>Last name</th>
            <th style={{ width: '150px' }}>First name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td style={{ backgroundColor: '#DCDCDC' }}>{row.LastName}</td>
              <td style={{ backgroundColor: '#DCDCDC' }}>{row.FirstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default DataTable
