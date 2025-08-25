import { useState } from 'react';
import { supabase } from '../integrations/supabase/client';

export const useContactSubmissions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Submit contact form
  const submitContact = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      // Get user's IP address and user agent for analytics
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

      const { data, error } = await supabase
        .from('11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions')
        .insert(submissionData)
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

  // Get all contact submissions (for admin use)
  const getContactSubmissions = async (filters = {}) => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply filters
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
      if (status === 'resolved' || status === 'closed') {
        updateData.responded_at = new Date().toISOString();
      }

      const { data, error } = await supabase
        .from('11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions')
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