'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Define form input types
type FormValues = {
  image: FileList;  // Correct type for image
  name: string;
  author: string;
  isbn: string;
  publication: string;
  year: string;
  description: string;
};

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  image: Yup.mixed()
    .test('fileRequired', 'Book image is required', (value) => {
      return value && (value as FileList).length > 0;  // Check if file is uploaded
    })
    .required('Book image is required'),
  name: Yup.string().required('Book name is required').min(2, 'Name must be at least 2 characters'),
  author: Yup.string().required('Author name is required'),
  isbn: Yup.string()
    .required('ISBN is required')
    .matches(/^[0-9-]+$/, 'ISBN must only contain numbers and dashes'),
  publication: Yup.string().required('Publication is required'),
  year: Yup.string()
    .required('Year is required')
    .matches(/^(19|20)\d{2}$/, 'Year must be a valid year'),
  description: Yup.string().required('Description is required').min(10, 'Description must be at least 10 characters'),
});

const AddBookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema) as any,  // Cast to any to handle mixed type issue
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Book Image */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Book Image
        </label>
        <input
          type="file"
          {...register('image')}
          id="image"
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
      </div>

      {/* Name of the Book */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name of the Book
        </label>
        <input
          type="text"
          {...register('name')}
          id="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Author */}
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          {...register('author')}
          id="author"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
      </div>

      {/* ISBN */}
      <div className="mb-4">
        <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
          ISBN
        </label>
        <input
          type="text"
          {...register('isbn')}
          id="isbn"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
      </div>

      {/* Publication */}
      <div className="mb-4">
        <label htmlFor="publication" className="block text-sm font-medium text-gray-700">
          Publication
        </label>
        <input
          type="text"
          {...register('publication')}
          id="publication"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.publication && <p className="text-red-500 text-sm mt-1">{errors.publication.message}</p>}
      </div>

      {/* Year */}
      <div className="mb-4">
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Year
        </label>
        <input
          type="text"
          {...register('year')}
          id="year"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('description')}
          id="description"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBookForm;
