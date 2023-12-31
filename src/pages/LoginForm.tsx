"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { atlasLogin } from '@/assets'

export function ProfileForm() {
  const form = useForm()

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('hello world');
  }

  // console.log('hello atlasLogin', atlasLogin);

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-xl dark:bg-gray-900">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            {/* <img
              className="object-cover w-full h-full"
              alt="loginimage"
              src={atlasLogin}
            /> */}
          </div>

          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="text-xl dark:text-white">Login to Your account</h1>
              <h3 className="text-sm mb-4 dark:text-white">
                Please enter your password and email to enter
              </h3>
              <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="use@atlas.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full">
                    <Button
                      variant="default"
                      size="lg"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-full w-1/2">
        <div className="flex flex-col grow"></div>
      </div> */}
    </div>
  );
}
