export type Database = {
  public: {
    Tables: {
      "11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions": {
        Row: {
          id: string;
          user_id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          subject: string | null;
          message: string;
          status: "new" | "in_progress" | "resolved" | "closed";
          priority: "low" | "normal" | "high" | "urgent";
          source: string | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
          updated_at: string;
          responded_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          subject?: string | null;
          message: string;
          status?: "new" | "in_progress" | "resolved" | "closed";
          priority?: "low" | "normal" | "high" | "urgent";
          source?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
          updated_at?: string;
          responded_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          company?: string | null;
          subject?: string | null;
          message?: string;
          status?: "new" | "in_progress" | "resolved" | "closed";
          priority?: "low" | "normal" | "high" | "urgent";
          source?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
          updated_at?: string;
          responded_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};

export type ContactSubmission = Database["public"]["Tables"]["11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"]["Row"];
export type ContactSubmissionInsert = Database["public"]["Tables"]["11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"]["Insert"];
export type ContactSubmissionUpdate = Database["public"]["Tables"]["11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"]["Update"];