"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getAllJournals } from "../../../sanity/lib/journal-util";
export default function page() {
  useEffect(() => {
    useEffect(() => {
      const fetchData = async () => {
        const journals = await getAllJournals();
        setData(journals);
      };
      fetchData();
    }, []);
    const fetchData = async () => {
      const journals = await getAllJournals();
      setData(journals);
    };
    fetchData();
  }, []);

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {Journals?.map((journal) => (
        <Card key={journal._id} product={journal} />
      ))}
    </div>
  );
}
