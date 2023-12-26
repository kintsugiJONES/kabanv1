'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from './ui/textarea'






function TodoDialog() {
    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const {title, description} = Object.fromEntries(formData)
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          + Add New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>Plug away Playa</DialogDescription>
        </DialogHeader>
        <form id="todo-form"
              className="grid gap-4 py-4 "
              onSubmit={handleSubmit}>
         <div className='grid grid-cols-4 items-center gap-4'>
            <Input
            id="title"
            name="title"
            placeholder="title"
            className='col-span-4'
            />
         </div>
         <div className='grid grid-cols-4 item center gap-4'>
            <Textarea
            id="description"
            name="description"
            placeholder="Add more details"
            className='col-span-4'
            />
         </div>
        </form>
        <DialogFooter>
        <DialogTrigger asChild>
          <Button type="submit" size='sm' form='todo-form'>
            Add Todo
          </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TodoDialog
