import { useState } from 'react';
import { supabase } from '../integrations/supabase/client';

export const useContactSubmissions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Submit contact form using simple table
  const submitContact = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const userAgent = navigator.userAgent;
      
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        subject: formData.subject,
        message: formData.message,
        source: 'website',
        user_agent: userAgent,
        priority: 'normal',
        status: 'new'
      };

      console.log('Submitting to simple table:', submissionData);

      const { data, error } = await supabase
        .from('contact_submissions_simple')
        .insert(submissionData)
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Submission successful:', data);
      return { data, error: null };
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Get all contact submissions
  const getContactSubmissions = async (filters = {}) => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('contact_submissions_simple')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters.status) {
        query = query.eq('status', filters.status);
      }
      if (filters.priority) {
        query = query.eq('priority', filters.priority);
      }
      if (filters.email) {
        query = query.eq('email', filters.email);
      }

      const { data, error } = await query;

      if (error) throw error;

      return { data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Update contact submission status
  const updateContactStatus = async (id, status, priority = null) => {
    setLoading(true);
    setError(null);

    try {
      const updateData = { status };
      if (priority) updateData.priority = priority;

      const { data, error } = await supabase
        .from('contact_submissions_simple')
        .update(updateData)
        .eq('id', id)
        .select();

      if (error) throw error;

      return { data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitContact,
    getContactSubmissions,
    updateContactStatus
  };
};