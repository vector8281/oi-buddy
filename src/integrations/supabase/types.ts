export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          notes: string | null
          scheduled_at: string
          status: string
          title: string
          type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          notes?: string | null
          scheduled_at: string
          status?: string
          title: string
          type: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          notes?: string | null
          scheduled_at?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: unknown
          new_values: Json | null
          old_values: Json | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: unknown
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: unknown
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      commercial_activities: {
        Row: {
          activity_type: string
          completed_at: string | null
          created_at: string
          customer_id: string
          description: string | null
          due_at: string | null
          id: string
          reference_id: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          completed_at?: string | null
          created_at?: string
          customer_id: string
          description?: string | null
          due_at?: string | null
          id?: string
          reference_id?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          completed_at?: string | null
          created_at?: string
          customer_id?: string
          description?: string | null
          due_at?: string | null
          id?: string
          reference_id?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commercial_activities_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commercial_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commercial_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      consortium_records: {
        Row: {
          adhesion_date: string | null
          admin_rate: number | null
          administrator: string | null
          created_at: string
          customer_id: string
          estimated_total: number | null
          group_number: string | null
          id: string
          installment_value: number | null
          letter_value: number
          motorcycle_name: string | null
          notes: string | null
          quota_number: string | null
          reserve_fund: number | null
          seller_id: string | null
          status: Database["public"]["Enums"]["consortium_status"]
          term_months: number | null
          updated_at: string
        }
        Insert: {
          adhesion_date?: string | null
          admin_rate?: number | null
          administrator?: string | null
          created_at?: string
          customer_id: string
          estimated_total?: number | null
          group_number?: string | null
          id?: string
          installment_value?: number | null
          letter_value?: number
          motorcycle_name?: string | null
          notes?: string | null
          quota_number?: string | null
          reserve_fund?: number | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["consortium_status"]
          term_months?: number | null
          updated_at?: string
        }
        Update: {
          adhesion_date?: string | null
          admin_rate?: number | null
          administrator?: string | null
          created_at?: string
          customer_id?: string
          estimated_total?: number | null
          group_number?: string | null
          id?: string
          installment_value?: number | null
          letter_value?: number
          motorcycle_name?: string | null
          notes?: string | null
          quota_number?: string | null
          reserve_fund?: number | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["consortium_status"]
          term_months?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "consortium_records_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consortium_records_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consortium_records_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      customer_interactions: {
        Row: {
          created_at: string
          customer_id: string
          description: string
          id: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          description: string
          id?: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          description?: string
          id?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_interactions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          assigned_to: string | null
          available_down_payment: number | null
          birth_date: string | null
          city: string | null
          cpf: string | null
          created_at: string
          desired_installment: number | null
          email: string | null
          estimated_value: number | null
          full_name: string
          has_trade_in: boolean
          id: string
          last_contact_at: string | null
          lead_source: string | null
          motorcycle_model_id: string | null
          next_follow_up_at: string | null
          notes: string | null
          phone: string | null
          pipeline_stage: Database["public"]["Enums"]["pipeline_stage"]
          state: string | null
          temperature: Database["public"]["Enums"]["lead_temperature"]
          trade_in_model: string | null
          trade_in_value: number | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          assigned_to?: string | null
          available_down_payment?: number | null
          birth_date?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string
          desired_installment?: number | null
          email?: string | null
          estimated_value?: number | null
          full_name: string
          has_trade_in?: boolean
          id?: string
          last_contact_at?: string | null
          lead_source?: string | null
          motorcycle_model_id?: string | null
          next_follow_up_at?: string | null
          notes?: string | null
          phone?: string | null
          pipeline_stage?: Database["public"]["Enums"]["pipeline_stage"]
          state?: string | null
          temperature?: Database["public"]["Enums"]["lead_temperature"]
          trade_in_model?: string | null
          trade_in_value?: number | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          assigned_to?: string | null
          available_down_payment?: number | null
          birth_date?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string
          desired_installment?: number | null
          email?: string | null
          estimated_value?: number | null
          full_name?: string
          has_trade_in?: boolean
          id?: string
          last_contact_at?: string | null
          lead_source?: string | null
          motorcycle_model_id?: string | null
          next_follow_up_at?: string | null
          notes?: string | null
          phone?: string | null
          pipeline_stage?: Database["public"]["Enums"]["pipeline_stage"]
          state?: string | null
          temperature?: Database["public"]["Enums"]["lead_temperature"]
          trade_in_model?: string | null
          trade_in_value?: number | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
          {
            foreignKeyName: "customers_motorcycle_model_id_fkey"
            columns: ["motorcycle_model_id"]
            isOneToOne: false
            referencedRelation: "motorcycle_models"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          created_by: string | null
          customer_id: string
          file_url: string | null
          id: string
          name: string
          proposal_id: string | null
          status: Database["public"]["Enums"]["document_status"]
          type: Database["public"]["Enums"]["document_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_id: string
          file_url?: string | null
          id?: string
          name: string
          proposal_id?: string | null
          status?: Database["public"]["Enums"]["document_status"]
          type?: Database["public"]["Enums"]["document_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_id?: string
          file_url?: string | null
          id?: string
          name?: string
          proposal_id?: string | null
          status?: Database["public"]["Enums"]["document_status"]
          type?: Database["public"]["Enums"]["document_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
          {
            foreignKeyName: "documents_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
        ]
      }
      financing_applications: {
        Row: {
          approved_value: number | null
          created_at: string
          customer_id: string
          id: string
          lender: string | null
          notes: string | null
          proposal_id: string | null
          requested_value: number | null
          seller_id: string | null
          simulation_id: string | null
          status: Database["public"]["Enums"]["financing_status"]
          updated_at: string
        }
        Insert: {
          approved_value?: number | null
          created_at?: string
          customer_id: string
          id?: string
          lender?: string | null
          notes?: string | null
          proposal_id?: string | null
          requested_value?: number | null
          seller_id?: string | null
          simulation_id?: string | null
          status?: Database["public"]["Enums"]["financing_status"]
          updated_at?: string
        }
        Update: {
          approved_value?: number | null
          created_at?: string
          customer_id?: string
          id?: string
          lender?: string | null
          notes?: string | null
          proposal_id?: string | null
          requested_value?: number | null
          seller_id?: string | null
          simulation_id?: string | null
          status?: Database["public"]["Enums"]["financing_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "financing_applications_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_applications_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_applications_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_applications_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
          {
            foreignKeyName: "financing_applications_simulation_id_fkey"
            columns: ["simulation_id"]
            isOneToOne: false
            referencedRelation: "financing_simulations"
            referencedColumns: ["id"]
          },
        ]
      }
      financing_simulations: {
        Row: {
          created_at: string
          customer_id: string
          down_payment: number
          estimated_cet: number | null
          estimated_installment: number | null
          financed_value: number
          id: string
          installments: number
          lender: string | null
          monthly_rate: number
          motorcycle_name: string | null
          motorcycle_value: number
          notes: string | null
          proposal_id: string | null
          seller_id: string | null
          status: Database["public"]["Enums"]["financing_status"]
          total_estimated_paid: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          down_payment?: number
          estimated_cet?: number | null
          estimated_installment?: number | null
          financed_value?: number
          id?: string
          installments?: number
          lender?: string | null
          monthly_rate?: number
          motorcycle_name?: string | null
          motorcycle_value?: number
          notes?: string | null
          proposal_id?: string | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["financing_status"]
          total_estimated_paid?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          down_payment?: number
          estimated_cet?: number | null
          estimated_installment?: number | null
          financed_value?: number
          id?: string
          installments?: number
          lender?: string | null
          monthly_rate?: number
          motorcycle_name?: string | null
          motorcycle_value?: number
          notes?: string | null
          proposal_id?: string | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["financing_status"]
          total_estimated_paid?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "financing_simulations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_simulations_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_simulations_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financing_simulations_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      future_sales: {
        Row: {
          appointment_id: string | null
          created_at: string
          customer_id: string
          estimated_down_payment: number | null
          estimated_purchase_date: string | null
          estimated_value: number | null
          id: string
          motorcycle_name: string | null
          next_contact_at: string | null
          notes: string | null
          reason: string | null
          seller_id: string | null
          status: Database["public"]["Enums"]["future_sale_status"]
          updated_at: string
        }
        Insert: {
          appointment_id?: string | null
          created_at?: string
          customer_id: string
          estimated_down_payment?: number | null
          estimated_purchase_date?: string | null
          estimated_value?: number | null
          id?: string
          motorcycle_name?: string | null
          next_contact_at?: string | null
          notes?: string | null
          reason?: string | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["future_sale_status"]
          updated_at?: string
        }
        Update: {
          appointment_id?: string | null
          created_at?: string
          customer_id?: string
          estimated_down_payment?: number | null
          estimated_purchase_date?: string | null
          estimated_value?: number | null
          id?: string
          motorcycle_name?: string | null
          next_contact_at?: string | null
          notes?: string | null
          reason?: string | null
          seller_id?: string | null
          status?: Database["public"]["Enums"]["future_sale_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "future_sales_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "future_sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "future_sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "future_sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      lost_opportunities: {
        Row: {
          competitor: string | null
          created_at: string
          customer_id: string
          description: string | null
          id: string
          lost_at: string
          lost_value: number | null
          notes: string | null
          previous_stage: Database["public"]["Enums"]["pipeline_stage"] | null
          reason: Database["public"]["Enums"]["lost_reason"]
          reopened_at: string | null
          reopened_to_stage:
            | Database["public"]["Enums"]["pipeline_stage"]
            | null
          seller_id: string | null
          updated_at: string
        }
        Insert: {
          competitor?: string | null
          created_at?: string
          customer_id: string
          description?: string | null
          id?: string
          lost_at?: string
          lost_value?: number | null
          notes?: string | null
          previous_stage?: Database["public"]["Enums"]["pipeline_stage"] | null
          reason: Database["public"]["Enums"]["lost_reason"]
          reopened_at?: string | null
          reopened_to_stage?:
            | Database["public"]["Enums"]["pipeline_stage"]
            | null
          seller_id?: string | null
          updated_at?: string
        }
        Update: {
          competitor?: string | null
          created_at?: string
          customer_id?: string
          description?: string | null
          id?: string
          lost_at?: string
          lost_value?: number | null
          notes?: string | null
          previous_stage?: Database["public"]["Enums"]["pipeline_stage"] | null
          reason?: Database["public"]["Enums"]["lost_reason"]
          reopened_at?: string | null
          reopened_to_stage?:
            | Database["public"]["Enums"]["pipeline_stage"]
            | null
          seller_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lost_opportunities_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lost_opportunities_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lost_opportunities_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      motorcycle_models: {
        Row: {
          active: boolean
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          active?: boolean
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          active?: boolean
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          active: boolean
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      proposals: {
        Row: {
          created_at: string
          customer_id: string
          down_payment: number
          estimated_installment: number | null
          expires_at: string | null
          financed_value: number
          id: string
          installments: number | null
          motorcycle_model_id: string | null
          motorcycle_name: string | null
          motorcycle_price: number
          notes: string | null
          payment_method: Database["public"]["Enums"]["payment_method"]
          seller_id: string | null
          status: Database["public"]["Enums"]["proposal_status"]
          trade_in_value: number
          updated_at: string
          version: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          down_payment?: number
          estimated_installment?: number | null
          expires_at?: string | null
          financed_value?: number
          id?: string
          installments?: number | null
          motorcycle_model_id?: string | null
          motorcycle_name?: string | null
          motorcycle_price?: number
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"]
          seller_id?: string | null
          status?: Database["public"]["Enums"]["proposal_status"]
          trade_in_value?: number
          updated_at?: string
          version?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          down_payment?: number
          estimated_installment?: number | null
          expires_at?: string | null
          financed_value?: number
          id?: string
          installments?: number | null
          motorcycle_model_id?: string | null
          motorcycle_name?: string | null
          motorcycle_price?: number
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"]
          seller_id?: string | null
          status?: Database["public"]["Enums"]["proposal_status"]
          trade_in_value?: number
          updated_at?: string
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposals_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_motorcycle_model_id_fkey"
            columns: ["motorcycle_model_id"]
            isOneToOne: false
            referencedRelation: "motorcycle_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      sales: {
        Row: {
          created_at: string
          customer_id: string
          down_payment: number | null
          financed_value: number | null
          id: string
          installments: number | null
          motorcycle_model_id: string | null
          notes: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          proposal_id: string | null
          sale_date: string
          sale_value: number
          seller_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          down_payment?: number | null
          financed_value?: number | null
          id?: string
          installments?: number | null
          motorcycle_model_id?: string | null
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          proposal_id?: string | null
          sale_date?: string
          sale_value?: number
          seller_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          down_payment?: number | null
          financed_value?: number | null
          id?: string
          installments?: number | null
          motorcycle_model_id?: string | null
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          proposal_id?: string | null
          sale_date?: string
          sale_value?: number
          seller_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_motorcycle_model_id_fkey"
            columns: ["motorcycle_model_id"]
            isOneToOne: false
            referencedRelation: "motorcycle_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      sales_goals: {
        Row: {
          created_at: string
          created_by: string | null
          end_date: string
          goal_type: string
          id: string
          period_type: string
          start_date: string
          target_value: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          end_date: string
          goal_type: string
          id?: string
          period_type: string
          start_date: string
          target_value: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          end_date?: string
          goal_type?: string
          id?: string
          period_type?: string
          start_date?: string
          target_value?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_goals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_goals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
          {
            foreignKeyName: "sales_goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      sales_pipeline_history: {
        Row: {
          created_at: string
          customer_id: string
          from_stage: Database["public"]["Enums"]["pipeline_stage"] | null
          id: string
          to_stage: Database["public"]["Enums"]["pipeline_stage"]
          user_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          from_stage?: Database["public"]["Enums"]["pipeline_stage"] | null
          id?: string
          to_stage: Database["public"]["Enums"]["pipeline_stage"]
          user_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          from_stage?: Database["public"]["Enums"]["pipeline_stage"] | null
          id?: string
          to_stage?: Database["public"]["Enums"]["pipeline_stage"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_pipeline_history_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_pipeline_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_pipeline_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
    }
    Views: {
      consortium_summary: {
        Row: {
          installment_value: number | null
          letter_value: number | null
          quantity: number | null
          status: Database["public"]["Enums"]["consortium_status"] | null
        }
        Relationships: []
      }
      financing_summary: {
        Row: {
          financed_value: number | null
          quantity: number | null
          status: Database["public"]["Enums"]["financing_status"] | null
        }
        Relationships: []
      }
      lead_source_summary: {
        Row: {
          converted: number | null
          leads: number | null
          source: string | null
        }
        Relationships: []
      }
      pipeline_summary: {
        Row: {
          pipeline_stage: Database["public"]["Enums"]["pipeline_stage"] | null
          potential_value: number | null
          quantity: number | null
        }
        Relationships: []
      }
      sales_summary: {
        Row: {
          motorcycle_model_id: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          period: string | null
          sale_value: number | null
          sales_count: number | null
          seller_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_motorcycle_model_id_fkey"
            columns: ["motorcycle_model_id"]
            isOneToOne: false
            referencedRelation: "motorcycle_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "seller_performance"
            referencedColumns: ["seller_id"]
          },
        ]
      }
      seller_performance: {
        Row: {
          full_name: string | null
          leads: number | null
          proposals: number | null
          sale_value: number | null
          sales_count: number | null
          seller_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      current_profile_id: { Args: never; Returns: string }
      current_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
    }
    Enums: {
      consortium_status:
        | "interest"
        | "simulation"
        | "proposal"
        | "contracting"
        | "active"
        | "contemplated"
        | "cancelled"
      document_status: "pending" | "received" | "validated" | "rejected"
      document_type: "personal" | "financing" | "proposal" | "other"
      financing_status:
        | "simulation"
        | "sent"
        | "analysis"
        | "approved"
        | "rejected"
        | "contract"
        | "finalized"
        | "cancelled"
      future_sale_status:
        | "planned"
        | "waiting"
        | "follow_up"
        | "converted"
        | "cancelled"
      lead_temperature: "hot" | "warm" | "cold"
      lost_reason:
        | "price"
        | "down_payment"
        | "financing_denied"
        | "other_brand"
        | "other_bike"
        | "used"
        | "postponed"
        | "no_interest"
        | "changed_plans"
        | "not_reached"
        | "other"
      payment_method:
        | "cash"
        | "financing"
        | "consortium"
        | "financing_down"
        | "consortium_down"
        | "trade_financing"
        | "other"
      pipeline_stage:
        | "lead_new"
        | "follow_up"
        | "closing"
        | "won"
        | "financing"
        | "consortium"
        | "future_sale"
        | "lost"
      proposal_status:
        | "draft"
        | "sent"
        | "negotiating"
        | "approved"
        | "rejected"
        | "expired"
        | "cancelled"
      user_role: "admin" | "manager" | "seller"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      consortium_status: [
        "interest",
        "simulation",
        "proposal",
        "contracting",
        "active",
        "contemplated",
        "cancelled",
      ],
      document_status: ["pending", "received", "validated", "rejected"],
      document_type: ["personal", "financing", "proposal", "other"],
      financing_status: [
        "simulation",
        "sent",
        "analysis",
        "approved",
        "rejected",
        "contract",
        "finalized",
        "cancelled",
      ],
      future_sale_status: [
        "planned",
        "waiting",
        "follow_up",
        "converted",
        "cancelled",
      ],
      lead_temperature: ["hot", "warm", "cold"],
      lost_reason: [
        "price",
        "down_payment",
        "financing_denied",
        "other_brand",
        "other_bike",
        "used",
        "postponed",
        "no_interest",
        "changed_plans",
        "not_reached",
        "other",
      ],
      payment_method: [
        "cash",
        "financing",
        "consortium",
        "financing_down",
        "consortium_down",
        "trade_financing",
        "other",
      ],
      pipeline_stage: [
        "lead_new",
        "follow_up",
        "closing",
        "won",
        "financing",
        "consortium",
        "future_sale",
        "lost",
      ],
      proposal_status: [
        "draft",
        "sent",
        "negotiating",
        "approved",
        "rejected",
        "expired",
        "cancelled",
      ],
      user_role: ["admin", "manager", "seller"],
    },
  },
} as const
