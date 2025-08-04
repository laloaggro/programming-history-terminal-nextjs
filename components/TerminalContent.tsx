import React, { RefObject } from 'react';

interface TerminalContentProps {
  contentRef: RefObject<HTMLDivElement>;
  content: any[];
  monthlyFact: any;
  subcategoryDetails: any;
}

const TerminalContent = ({ contentRef, content, monthlyFact }: TerminalContentProps) => {
  return (
    <div id="content" ref={contentRef}>
      {content.map((item, index) => (
        <div key={index} className="output">
          {item.type === 'welcome' && (
            <>
              {item.content.map((line: string, i: number) => (
                <div key={i}>{line}</div>
              ))}
            </>
          )}
          
          {item.type === 'command' && (
            <div className="command">{item.content}</div>
          )}
          
          {item.type === 'help' && (
            <>
              {item.content.map((line: string, i: number) => (
                <div key={i}>&nbsp;&nbsp;{line}</div>
              ))}
            </>
          )}
          
          {item.type === 'fact' && (
            <>
              <div className="fact-title">{item.content.title}</div>
              <div className="fact-date">{item.content.date}</div>
              <div className="fact-content">{item.content.content}</div>
            </>
          )}
          
          {item.type === 'no-fact' && (
            <>
              <div className="fact-title">Sin hecho para hoy</div>
              <div className="fact-date">{item.content.date}</div>
              <div className="fact-content">{item.content.message}</div>
            </>
          )}
          
          {item.type === 'all-facts' && (
            <>
              <div>Todos los hechos de programación disponibles:</div>
              {item.content.map((fact: any, i: number) => (
                <div key={i} className="fact-item">&nbsp;&nbsp;{fact.date} - {fact.title}</div>
              ))}
            </>
          )}
          
          {item.type === 'unknown' && (
            <div>{item.content}</div>
          )}
        </div>
      ))}
      
      <div className="output" id="monthly-fact-container">
        <div className="fact-title">Hecho del Mes</div>
        {monthlyFact ? (
          <div id="monthly-fact-content">
            <div className="fact-date">{monthlyFact.date}</div>
            <div className="fact-content">{monthlyFact.title}: {monthlyFact.content}</div>
          </div>
        ) : (
          <div id="monthly-fact-content">
            <div className="fact-content">No hay hechos registrados para este mes.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalContent;