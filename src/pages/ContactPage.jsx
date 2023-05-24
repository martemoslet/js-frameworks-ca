import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "./ContactPage.css"
import styles from "../components/Button.module.css";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your name should be at least 3 characters')
      .required('Please enter your full name'),
    email: yup
      .string()
      .email()
      .required('Please enter a valid email address'),
    subject: yup
      .string()
      .min(3, 'Your subject should be at least 3 characters')
      .required('Please enter a subject'),
    body: yup
      .string()
      .min(3, 'Your message should be at least 3 characters')
      .required('Please enter a message'),
  })
  .required();

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data) {
        console.log(data);
      }

      return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact us</h1>
            <label htmlFor="fullName">Full name</label>
            <input {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <label htmlFor="email">Email address</label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
            <label htmlFor="subject">Subject</label>
            <input {...register('subject')} />
            <p>{errors.subject?.message}</p>
            <label htmlFor="body">Message</label>
            <input {...register('body')} />
            <p>{errors.body?.message}</p>
            <input type="submit" className={styles.primary} />
        </form>
      )
}